# Garden Website [![Build Status][build status badge]][build status link] [![Dependency Status][dependency status badge]][dependency status link]<!-- markdownlint-disable -->

<!-- markdownlint-enable -->

[build status badge]: https://flat.badgen.net/circleci/github/zendeskgarden/website/main?label=build
[build status link]: https://circleci.com/gh/zendeskgarden/website/tree/main
[dependency status badge]: https://flat.badgen.net/david/dev/zendeskgarden/website?label=dependencies
[dependency status link]: https://david-dm.org/zendeskgarden/website?type=dev

> :seedling: Garden is the design system by Zendesk

This repo contains the [Gatsby](https://www.gatsbyjs.org/)-powered site for
[garden.zendesk.com](https://garden.zendesk.com/).

## 🎛 Scripts

- `start` - starts the Gatsby development server for the website

  ```bash
  yarn start
  ```

- `build` - builds the Gatsby website as a static website

  ```bash
  yarn build
  ```

- `test` - lints and formats the website source code as well as running a type check with `tsc`

  ```bash
  yarn test
  ```

- `upgrade` - upgrades the `react-component` git submodule and component packages

  ```bash
  yarn run upgrade
  ```

  > if this command is ran manually, please make sure to rebuild the website
  > (or restart development server) to see the updates reflect

## 🤝 Contribution

Thanks for your interest in Garden! Community involvement helps make our
design system fresh and tasty for everyone.

Got issues with what you find here? Please feel free to create an
[issue](https://github.com/zendeskgarden/website/issues/new).

If you'd like to take a crack at making some changes, please follow our
[contributing](.github/CONTRIBUTING.md) documentation for details needed
to submit a PR.

Community behavior is benevolently ruled by a [code of
conduct](.github/CODE_OF_CONDUCT.md). Please participate accordingly.

## 🪪 License

Copyright 2023 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.md)
