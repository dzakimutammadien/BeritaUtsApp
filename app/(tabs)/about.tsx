import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Berita UTS App</Text>
      <Text style={styles.subtitle}>Aplikasi Berita Indonesia</Text>

      <Text style={styles.sectionTitle}>📱 Tentang Aplikasi</Text>
      <Text style={styles.text}>
        BeritaApp adalah aplikasi mobile untuk memenuhi tugas UTS mata kuliah Mobile Programing berbasis React Native (Expo) yang menyajikan berita terkini dari Indonesia. Dilengkapi dengan fitur simpan berita favorit, dan baca detail melalui WebView.
      </Text>

      <Text style={styles.sectionTitle}>👨‍💻 Developer</Text>
      <Text style={styles.text}>
        Dibuat oleh Dzaki Mutammadien Illiyin untuk tugas mata kuliah Mobile Programming.
      </Text>

      <Text style={styles.sectionTitle}>📚 Teknologi</Text>
      <Text style={styles.text}>
        - React Native (Expo)
        {"\n"}- Expo Router
        {"\n"}- AsyncStorage
        {"\n"}- WebView
        {"\n"}- News API
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#006837",
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    alignSelf: "flex-start",
    color: "#006837",
  },
  text: {
    fontSize: 14,
    color: "#444",
    textAlign: "left",
    alignSelf: "stretch",
    lineHeight: 20,
  },
});
