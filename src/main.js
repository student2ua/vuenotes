import Vue from 'vue'
import App from './App.vue'
import HTTP from './axios'
HTTP.interceptors.response.use(
    response => {
        if(response.data instanceof Blob){ return response.data;}
        return response.data.data || {}

    },
    error =>{
        if(error.response){
            Vue.prototype.$buefy.toast.open({
                message:error.response.data.message || "Something went wrong",
                type:"is-danger"
            });
        }else{
            Vue.prototype.$buefy.toast.open({
                message:"Unable to connect to server",
                type: "is-danger"
            });
        }
        return Promise.reject(error);
    }
    );
Vue.prototype.$http = HTTP;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
