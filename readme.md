## Building Faster Apps with Vue

- [оригинал](https://levelup.gitconnected.com/building-faster-apps-with-vue-3d9a4302061d)
- [перевод](https://habr.com/ru/company/ruvds/blog/487684/)


### Docker
 нам нужно установить и передать в приложение переменную **VUE_APP_API_HOST** во время его сборки
Сделать это очень просто, воспользовавшись опцией --build-arg при сборке образа:
`sudo docker build --build-arg VUE_APP_API_HOST=<Scheme>://<ServiceHost>:<ServicePort>/ -f Dockerfile -t vue-app-image .`

запустить:
`sudo docker run -d -p 8080:80 — name vue-app vue-app-image`
