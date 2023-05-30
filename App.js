import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import casal from "./assets/casal.png";
import filhos from "./assets/filhos.png";
import cunhadas from "./assets/irmaes.png";
import vovo from "./assets/vovo.png";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Familia Simpsons</Text>
      <View style={styles.total}>
        <Image source={casal} style={styles.imagem} />
        <Text style={styles.titulo2}>O casal</Text>
        <Text style={styles.texto}>
          Homer Jay Simpson é o pai e patriarca da família Simpsons
        </Text>
        <Text style={styles.texto}>
          Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer
          Simpson e mãe de Lisa, Bart e Maggie Simpson na série animada Os
          Simpsons.
        </Text>
      </View>
      <View style={styles.total}>
        <Image source={filhos} style={styles.imagem} />
        <Text style={styles.titulo2}>Os Filhos</Text>
        <Text style={styles.texto}>
          Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso
        </Text>
        <Text style={styles.texto}>
          Lisa Marie é a filha do meio e a mais inteligente.
        </Text>
        <Text style={styles.texto}>
          Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa
        </Text>
      </View>
      <View style={styles.total}>
        <Image source={vovo} style={styles.imagem} />
        <Text style={styles.titulo2}>O Vovô</Text>
        <Text style={styles.texto}>
          Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai de
          Hommer simpson
        </Text>
      </View>
      <View style={styles.total}>
        <Image source={cunhadas} style={styles.imagem} />
        <Text style={styles.titulo2}>As Cunhadas</Text>
        <Text style={styles.texto}>
          Patty e Selma são as irmãs de Margie e vivem de forma 'largada'
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  },
  titulo: {
    fontSize: 30,
    margin: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "",
  },
  total: {
    margin: 5,
    borderWidth: 1,
    backgroundColor: "white",
  },
  imagem: {
    width: 300,
    height: 200,
    margin: 10,
  },
  titulo2: {
    margin: 5,
    fontSize: 19,
    fontWeight: "bold",
  },
  texto: {
    margin: 5,
  },
});
