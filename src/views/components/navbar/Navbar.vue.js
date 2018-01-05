export default {
  name: 'Navbar',
  data() {
    return {
      path: [],
      menu: {
        show: false,
        selectedItems: [],
        search: {
          required: false,
          show: false,
          value: ''
        },
        items: [
          {
            title: 'Support',
            path: 'https://runnertech.freshdesk.com/support/login',
            active: false
          },
          {
            title: 'Documentation',
            path: 'Documentation',
            active: false
          },
          {
            title: 'Contact Us',
            path: 'http://runneredq.com/contact-us',
            active: false
          },
          {
            title: 'Register',
            path: 'Register',
            active: false
          },
          {
            title: 'Log In',
            path: 'Login',
            active: false
          }
        ]
      }
    };
  },
  mounted() {
    this.menu.selectedItems = this.menu.items;
    setTimeout(() => {
      const $items = document.querySelectorAll('.secondary-menu > .menu-item > .navigate-link');
      $items.forEach(($item) => {
        $item.addEventListener('click', e => {
          this.menu.show = false;
        });
      });
    });
  },
  watch: {
    path(val) {
      this.menu.selectedItems = this.menu.items;
      for (let i = 0; i < val.length; i++) {
        this.menu.selectedItems = this.menu.selectedItems[val[i]].children;
      }
    }
  },
  methods: {
    search(event) {
      event.preventDefault();
    },
    selectMobileMenu(index) {
      this.menu.show = false;
      this.delayFunc(() => {
        this.menu.show = true;
        this.path.push(index);
      });
    },
    toggleMenu() {
      this.menu.show = !this.menu.show;
      this.delayFunc(() => {
        this.path = [];
      });
    },
    back() {
      this.menu.show = false;
      this.delayFunc(() => {
        this.menu.show = true;        
        this.path.splice(this.path.length - 1, 1);
      });
    },
    delayFunc(func) {
      setTimeout(func, 500);
    },
    insideApp(url) {
      return url.indexOf('http') === -1;
    },
    navigate() {
      console.log('======');
    }
  }
}
