import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.octocat}
            source={require("./assets/octocat.png")}
          />
        </View>
        <View>
          <Text style={styles.nameText}>The Octocat</Text>
          <Text style={styles.usernameText}>@octocat</Text>
          <Text style={styles.joinDateText}>Joined 25 Jan 2011</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={{ color: "gray" }}>
          Integer condimentum nec elit a vestibulum. Morbi eu magna nec mauris
          maximus pellentesque a at felis. Morbi et aliquam justo. Sed lacinia
          in libero sit amet viverra. Donec pretium, libero et fermentum
          condimentum, magna tortor
        </Text>
      </View>
      <View style={styles.repo}>
        <View style={styles.repoCol}>
          <Text style={styles.gray}>Repos</Text>
          <Text>8</Text>
        </View>
        <View style={styles.repoCol}>
          <Text>Followers</Text>
          <Text>3938</Text>
        </View>
        <View style={styles.repoCol}>
          <Text>Following</Text>
          <Text>9</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    marginTop: 30,
  },
  header: { flexDirection: "row", gap: 40 },
  octocat: {
    height: 80,
    width: 80,
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  usernameText: {
    color: "blue",
  },
  joinDateText: {
    marginTop: 10,
    color: "gray",
  },
  bio: {
    marginTop: 30,
  },
  repo: {
    backgroundColor: "#F8F8FF",
    borderRadius: 10,
    marginTop: 30,
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-around",
  },
  repoCol: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grayColor: {
    color: "gray",
  },
});
