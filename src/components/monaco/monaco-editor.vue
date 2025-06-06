<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';
import * as monaco from 'monaco-editor';
// 资源引入
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

// @ts-expect-error
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'json') {
      return new JsonWorker();
    }
    if (['css', 'scss', 'less'].includes(label)) {
      return new CssWorker();
    }
    if (label === 'html') {
      return new HtmlWorker();
    }
    if (['typescript', 'javascript'].includes(label)) {
      return new TsWorker();
    }
    return new EditorWorker();
  }
};

export default defineComponent({
  name: 'MonacoEditor',
  props: {
    diffEditor: { type: Boolean, default: false },
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: '100%' },
    original: String,
    value: String,
    language: { type: String, default: 'javascript' },
    theme: { type: String, default: 'vs' },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ['editorWillMount', 'editorDidMount', 'change', 'update:value'],
  setup(props) {
    const { width, height } = toRefs(props);
    const style = computed(() => {
      const fixedWidth = width.value.toString().includes('%') ? width.value : `${width.value}px`;
      const fixedHeight = height.value.toString().includes('%') ? height.value : `${height.value}px`;
      return {
        width: fixedWidth,
        height: fixedHeight,
        'text-align': 'left'
      };
    });
    return {
      style
    };
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        this.editor.updateOptions(options);
      }
    },
    value() {
      this.value !== this._getValue() && this._setValue(this.value);
    },
    original() {
      this._setOriginal();
    },
    language() {
      if (!this.editor) return;
      if (this.diffEditor) {
        const { original, modified } = this.editor.getModel();
        monaco.editor.setModelLanguage(original, this.language);
        monaco.editor.setModelLanguage(modified, this.language);
      } else monaco.editor.setModelLanguage(this.editor.getModel(), this.language);
    },
    theme() {
      monaco.editor.setTheme(this.theme);
    }
  },
  mounted() {
    this.initMonaco();
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose();
    }
  },
  methods: {
    initMonaco() {
      this.$emit('editorWillMount', monaco);
      const { value, language, theme, options } = this;
      this.editor = monaco.editor[this.diffEditor ? 'createDiffEditor' : 'create'](this.$el, {
        value,
        language,
        theme,
        ...options
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.diffEditor && this._setModel(this.value, this.original);

      // @event `change`
      const editor = this._getEditor();
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      editor &&
        editor.onDidChangeModelContent(event => {
          const editorValue = editor.getValue();
          if (this.value !== editorValue) {
            this.$emit('change', editorValue, event);
            this.$emit('update:value', editorValue);
          }
        });

      this.$emit('editorDidMount', this.editor);
    },
    _setModel(value, original) {
      const { language } = this;
      const originalModel = monaco.editor.createModel(original, language);
      const modifiedModel = monaco.editor.createModel(value, language);
      this.editor.setModel({
        original: originalModel,
        modified: modifiedModel
      });
    },
    // eslint-disable-next-line consistent-return
    _setValue(value) {
      const editor = this._getEditor();
      if (editor) return editor.setValue(value);
    },
    _getValue() {
      const editor = this._getEditor();
      if (!editor) return '';
      return editor.getValue();
    },
    _getEditor() {
      if (!this.editor) return null;
      return this.diffEditor ? this.editor.modifiedEditor : this.editor;
    },
    _setOriginal() {
      const { original } = this.editor.getModel();
      original.setValue(this.original);
    }
  }
});
</script>

<template>
  <div class="monaco-editor-vue3" :style="style"></div>
</template>
