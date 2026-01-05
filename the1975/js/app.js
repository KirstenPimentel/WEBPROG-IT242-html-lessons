// GALLERY
Vue.createApp({
  data() {
    return {
      images: [
        "images/gallery1.jpg",
        "images/gallery2.jpg",
        "images/gallery3.jpg"
      ]
    }
  }
}).mount('#galleryApp');

// GUESTBOOK
Vue.createApp({
  data() {
    return {
      name: '',
      comment: '',
      entries: []
    }
  },
  methods: {
    addComment() {
      if (this.name && this.comment) {
        this.entries.push({
          name: this.name,
          comment: this.comment
        });
        this.name = '';
        this.comment = '';
      }
    }
  }
}).mount('#guestbookApp');
