# Call For Code 2020
## Getting Started
```bash
# start expo
expo start

# server for ios
expo start --ios

# server for android
expo start --android

# server for web(connection: Local)
expo start --web
```
## File Structure
```bash
.
├─ .expo-shared
├─ .gitignore
├─ App.js
├─ app.json
├─ babel.config.js
├─ package.json
├─ README.md
├─ yarn.lock
├─ assets                   # images, fonts, etc...
│  ├─ fonts
│  └─ images
│     ├─ favicon.png
│     ├─ icon.png
│     ├─ robot-dev.png
│     ├─ robot-prod.png
│     └─ splash.png
├─ components               # components
│  ├─ StyledText.js
│  └─ TabBarIcon.js
├─ constants                # setting
│  ├─ Colors.js
│  └─ Layout.js
├─ hooks
├─ navigation               # navigation
│  ├─ BottomTabNavigator.js
│  └─ LinkingConfiguration.js
├─ screens                  # screen(page)
│  ├─ HomeScreen.js
│  └─ LinksScreen.js

```