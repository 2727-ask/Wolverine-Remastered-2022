module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.electron.Wolverine-Remastered-2022",
        "productName": "Wolverine-Remastered-2022",
        "publish": [
          {
            "provider": "github",
            "owner": "2727-ask",
            "repo": "ele-updator"
          }
        ],
        "win": {
          "publish": [
            "github"
          ],
          "target": [
            {
              "target": "nsis",
              "arch": [
                "x64",
                "ia32"
              ]
            }
          ]
        }

      }
    }
  }
}