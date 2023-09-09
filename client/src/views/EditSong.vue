<template>
  <div class="mt-5">
    <v-container>
      <h1 class="text-center mb-5">Create Song</h1>
      <v-alert type="error" v-if="error">
        <div v-html="error"></div>
      </v-alert>
      <v-alert type="success" v-if="success">
        <div v-html="success"></div>
      </v-alert>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="song.title"
            label="Title"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="song.artist"
            label="Artist"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="song.genre"
            label="Genre"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="song.album"
            label="Album"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="song.albumImageUrl"
            label="Album Image Url"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="song.youtubeId"
            label="Youtube ID"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea
            label="lyrics"
            hint="lyrics"
            v-model="song.lyrics"
          ></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-textarea label="tab" hint="tab" v-model="song.tab"></v-textarea>
        </v-col>
        <v-btn block color="primary" elevation="1" @click="create" x-large
          >Create</v-btn
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SongsService from "@/services/SongsService";
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
      error: null,
      success: null,
      required: (value) => !!value || "Required.",
    };
  },
  methods: {
    async create () {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        (key) => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields.";
        return;
      }
      try {
        await SongsService.post(this.song);
        this.$router.push({
          name: "songs",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId;
      this.song = (await SongsService.show(songId)).data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped></style>
