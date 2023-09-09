import Vue from "vue";
import VueRouter from "vue-router";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import IndexSongs from "@/views/IndexSongs";
import CreateSong from "@/views/CreateSong";
import ShowSong from "@/views/ShowSong";
import EditSong from "@/views/EditSong";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: IndexSongs,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path: "/songs/create",
    name: "songs-create",
    component: CreateSong,
  },
  {
    path: "/songs/:songId",
    name: "song",
    component: ShowSong,
  },
  {
    path: "/songs/:songId/edit",
    name: "song-edit",
    component: EditSong,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
