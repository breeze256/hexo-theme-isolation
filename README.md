# Plata theme for Hexo

Documentation: https://breeze256.is-local.org/hexo-theme-plata

Plata theme for Hexo is a light and simple theme based on
[Material Design Lite](https://getmdl.io/).

The main purpose of developing this theme is for me to learn about front-end 
development and try out some new things.

* Use [Material Design Lite](https://getmdl.io/) as its layout framework.
* Use [PNPM](https://pnpm.io/) to manage its dependences.

## Quick Start

It is recommended to install the theme via node,

```bash
npm install --save hexo-theme-plata
```

Or, you can install the theme manually,

```bash
git clone https://github.com/breeze256/hexo-theme-plata.git ./themes/plata
```

Once you install the theme, change the default theme in your `_config.yml`.

``` yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: plata
```

## Configuration

It is not recommended to directly modify any files in the plata theme. Because this may cause errors (e.g. merge conflicts), and the modified files may be discarded when upgrading the theme.

I strongly recommend users to use the Alternate Theme Config to configure the theme.

``` bash
cp node_modules/hexo-theme-plata/_config.yml _config.plata.yml
# Now you can configure the theme.
vim _config.plata.yml
```

## Necessary packages

This theme uses SASS to be used as a CSS preprocessor, so you may need a SASS renderer. 

And an excerpt plugin is also recommended,

* `hexo-renderer-dartsass`
* `hexo-excerpt`

You may want to remove some renderers that you no longer need,

* `hexo-renderer-stylus`
* `hexo-renderer-ejs`

And I recommend using

* `hexo-renderer-markdown-it`

instead of `hexo-renderer-marked`.

## Highlighting

Plata currently only supports prismjs highlighting.
You should change the default highlighter in your `_config.yml` if you want highlighting.

``` yaml
syntax_highlighter: prismjs
```

## APlayer

Until now, Plata supports configuring APlayer via MetingJS. See https://github.com/metowolf/MetingJS for details.

``` yaml
# Aplayer settings.
aplayer:
  enable: true
  id: 2196136085 # List ID.
  server: netease
  type: playlist
  autoplay: true
  order: random
  volume: 0.55
  theme: #cc543a
  preload: auto
```

## Pjax

If you want Aplayer to run in the background, open Pjax.

``` yaml
# Pjax switch.
pjax: true
```

You should know that pjax is an experimental option and has **BUGS** in the mobile view.