import mdx from 'eslint-plugin-mdx';

const plugin = {
  ...mdx.flat,
  processor: mdx.createRemarkProcessor({
    lintCodeBlocks: true,
  }),
  rules: {
    ...mdx.flat.rules,
    semi: 0,
    'no-undef': 0,
  },
};

Object.defineProperty(plugin, 'codeBlocks', {
  value: mdx.flatCodeBlocks,
});

export default plugin;
