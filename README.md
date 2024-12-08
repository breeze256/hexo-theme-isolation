# Flat for Hexo

> Please be aware that this theme is still WORK IN PROGRESS.

Flat for Hexo theme is a light and simple theme based on
[Material Design Lite](https://getmdl.io/). Its code is easy to read and easy
to be modified.

The main purpose of developing this theme is for me to learn about front-end 
development and try out some new things.

* Use [Material Design Lite](https://getmdl.io/) as its layout framework.
* Use [PNPM](https://pnpm.io/) to manage its dependences.

## Quick Start

It is recommended to install the theme via node,

```bash
npm install --save hexo-theme-flat
```

Or, you can install the theme manually,

```bash
git clone https://github.com/breeze256/hexo-theme-flat.git ./themes/flat
```

Once you install the theme, change the default theme in your `_config.yml`.

``` yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: flat
```

## Configuration

It is not recommended to directly modify any files in the flat theme. Because this may cause errors (e.g. merge conflicts), and the modified files may be discarded when upgrading the theme.

I strongly recommend users to use the Alternate Theme Config to configure the theme.

``` bash
cp node_modules/hexo-theme-flat/_config.yml _config.flat.yml
# Now you can configure the theme.
vim _config.flat.yml
```

## Highlighting

Flat currently only supports prismjs highlighting.
You should change the default highlighter in your `_config.yml` if you want highlighting.

``` yaml
syntax_highlighter: prismjs
```
