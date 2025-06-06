<img width="1512" alt="builder-screenshot" src="https://github.com/webstudio-is/.github/blob/main/assets/builder-screenshot.png?raw=true">
<br /><br />

<section align="center">
  Webstudio is an Open Source Visual Development Platform for developers, designers, and cross-functional teams. You own the data, components, and infrastructure. You can use the hosted version or roll out your own.
</section>
<br /><br />

## Learning Resources

- [Blog](https://webstudio.is/blog)
- [Documentation](https://docs.webstudio.is/)
- [Brand and Product Design](https://docs.webstudio.is/contributing/contributing-for-designers)
- [Contributing Guide for Devs](https://docs.webstudio.is/contributing/contributing-for-developers)
- [Github Discussions](https://github.com/webstudio-is/webstudio-community/discussions)
- [Wishlist](https://github.com/webstudio-is/webstudio-community/discussions/categories/wishlist)
- [Builder Issues Tracker](https://github.com/webstudio-is/webstudio/issues)
- [Roadmap](https://github.com/orgs/webstudio-is/projects/11)

## Social Media

- [Twitter](https://twitter.com/getwebstudio)
- [Youtube](https://www.youtube.com/@getwebstudio)
- [Discord](https://wstd.us/community)

## Thanks

<a href="https://www.lost-pixel.com/"><img src="https://user-images.githubusercontent.com/29632358/168112844-77e76a0d-b96f-4bc8-b753-cd39f4afd428.png" width="50" height="50" alt="Lost Pixel" /></a>

Thanks to [Lost Pixel](https://www.lost-pixel.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.

## Running Locally

1. Install [pnpm](https://pnpm.io/) and Node.js 20.
2. Run `pnpm install` in the project root.
3. Start the development server with `pnpm dev`.
4. Open `http://localhost:5173` in your browser.
5. Click **Dev Login** on the login screen. No secret is required unless you set the optional `AUTH_SECRET` environment variable.


## Usage

The application works out of the box without any API keys. Optional integrations
such as Lost Pixel or image search are only enabled when the related environment
variables are provided. Use **Dev Login** for quick access while developing.
=======### Usage

After starting the dev server with `pnpm dev` you can immediately try the builder by visiting `http://localhost:5173` and clicking **Dev Login**. No API keys or additional setup are needed.


## License

This project is released under the [AGPL-3.0](LICENSE) license.
