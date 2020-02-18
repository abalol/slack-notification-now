# Slackに通知する自前のAPIを無料で作りたい

- Slackに自分で作ったアプリとかcurlとかで気軽に通知できるようなAPIを作りたい
- なるべくなら無料がいい

無料で使えるPaaSのnowにnode.jsサーバ(Express)をデプロイして
自分用APIサーバを作ってしまおう！

## 環境構築

1. CLIをインストールする
``` bash
npm i -g now
```
か
``` bash
yarn global add now
```

1. pullしてくる
https://github.com/abalol/slack-notification-now

以上

## 動かす。
pullしてきたプロジェクトの中で
``` bash
now
```
ってするといろいろ聞かれるので
``` bash
Now CLI 17.0.3
? Set up and deploy “~/dev/batch-now”? [Y/n] y
? Which scope do you want to deploy to? xxxxxx
? Link to existing project? [y/N] n
? What’s your project’s name? slack-notification
? In which directory is your code located? batch-now/./
❗️  The `name` property in now.json is deprecated (https://zeit.ink/5F)
🔗  Linked to info314/slack-notification (created .now)
🔍  Inspect: https://zeit.co/info314/slack-notification/lgumopmt8 [3s]
✅  Production: https://slack-notification.now.sh [copied to clipboard] [15s]
📝  Deployed to production. Run `now --prod` to overwrite later (https://zeit.ink/2F).
💡  To change the domain or build command, go to https://zeit.co/info314/slack-notification/settings
```
完了

## Slackの準備
https://api.slack.com/legacy/custom-integrations/legacy-tokens
ここからトークン発行する

チャンネルのIDをとる。
Slackでチャンネル名を右クリック「リンクをコピー」して
URLの最後の/以降がID

## ソースに貼る
``` javascript
  const SLACK_TOKEN = 'XXXXXXXXXXXXX'; 
  const CHANNEL_ID = 'XXXXXXXXX';
  const USER_NAME = 'おしらせおじさん';
```
ここに該当のやつを貼っつける。
USER_NAMEを変えないとずっとおじさん。

## デプロイ
もっかい
``` bash
now
```

ってする
``` bash
Now CLI 17.0.3
❗️  The `name` property in now.json is deprecated (https://zeit.ink/5F)
🔍  Inspect: https://zeit.co/info314/slack-notification/lgumopmt8 [1s]
✅  Preview: https://xxxxxxxxxxx.now.sh [copied to clipboard] [4s]
📝  To deploy to production (slack-notification.now.sh), run `now --prod`
```

previewのアドレスの後ろに `msg=好きな文言`
って付けてブラウザで開いてみよう

Slackに投稿されたらdone!!

お疲れ様でした。
