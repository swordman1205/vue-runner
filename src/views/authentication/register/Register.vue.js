export default {
  name: 'Register',
  data() {
    return {
      model: {
        companyName: '',
        serviceName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: ''
      },
      formstate: {},
    }
  },
  methods: {
    register() {
      //@todo : Put some register script here
    },
    changeCompanyName() {
      this.model.serviceName = this.getInitials(this.model.companyName);
    },
    getInitials(str) {
      if (!str) return '';
      return str.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g).join('').toUpperCase();
    }
  }
};
