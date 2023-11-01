#現在実行しているnext.jsを削除
rm -r -f ./profile
echo "情報 - 現在実行しているnext.jsを削除しました"

#gitからProfileをクローン
echo "情報 - aida0710/profileリポジトリをクローンします"
git clone https://github.com/aida0710/profile.git
echo "完了 - gitから必要なリポジトリをクローンしました"

# ビルド&起動処理
cd /home/aida/profile
npm install
npm run build
screen -S profile -X quit
screen -dmS profile
sleep 1s
screen -S profile -X stuff 'npm start'`echo -ne '\015'`

echo "完了 - 起動処理が完了しました"
