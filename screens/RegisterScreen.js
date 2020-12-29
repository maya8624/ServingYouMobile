import React from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  phone: Yup.string().required().min(8).max(11).label("Phone"), //.match
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <AppForm
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            name="firstName"
            placeholder="First Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            name="lastName"
            placeholder="Last Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="phone"
            name="phone"
            placeholder="Phone"
            textContentType="telephoneNumber"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;
