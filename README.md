[![Netlify Status](https://api.netlify.com/api/v1/badges/6d9ef494-a24b-46a2-882b-4440976ade37/deploy-status)](https://app.netlify.com/sites/hellorusk/deploys)
[![Dependency Status](https://img.shields.io/david/7ma7X/hellorusk.net.svg?style=flat)](https://img.shields.io/david/7ma7X/hellorusk.net.svg?style=flat)
[![DevDpendency Status](https://img.shields.io/david/dev/7ma7X/hellorusk.net.svg?style=flat)](https://img.shields.io/david/dev/7ma7X/hellorusk.net.svg?style=flat)

This is an older version of hellorusk.net (Moved to [https://hellorusk.netlify.com/](https://hellorusk.netlify.com/)).

```sh
# serve as http://localhost:3000
npm run dev

# build
npm run build

# deploy
npm run deploy

# add new post
npm run blog
```

## Feature

- 構成
  - Next.js + Netlify
  - TypeScript & ESLint & Prettier
  - ブログ部分の記述は [MDX](https://mdxjs.com/) を採用
  - CSS in JS として [Emotion](https://emotion.sh/docs/introduction) を採用

- ダークモード対応（[redux-persist](https://github.com/rt2zz/redux-persist) を用いて Redux と LocalStorage でダークモード On/Off を連携）
- [Renovate](https://github.com/renovatebot/renovate) によるモジュールの自動更新
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) + GitHub Actions によるサイトパフォーマンスの自動計測
