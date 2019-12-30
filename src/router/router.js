import Vue from "vue";
import Router from "vue-router";
import Home from  "../views/Home.vue";
import Testt from "../views/Testt.vue"
//import Mj from '../views/Mj.vue';
Vue.use (Router);
export default new Router({
mode : "history",
routes :[
{

    path : "/",
    name : "home",
    component : Home
},


{

    path : "/testt",
    name : "testt",
    component : Testt
},



 



]


});