import i18n from "@/locales/index";
export default {
  name: null,
  email: null,
  phone: null,
  username: null,
  website: null,
  emailRules: [
    (v) => !!v || i18n.tc("base.requiredField"),
    (v) => /.+@.+\..+/.test( v)|| i18n.tc("base.invalidEmail"),
  ],
};
