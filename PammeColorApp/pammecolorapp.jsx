const App = () => {
    return (
      <View style={styles.view0}>
        <Text style={styles.titulo}>PammeColorApp</Text>
        <SafeAreaView>
          <TextInput
            style={styles.txtinput}
            placeholder="nome"
            editable={true}
          />
          <TextInput
            style={styles.txtinputtel}
            placeholder="telefone"
            editable={true}
          />        
        </SafeAreaView>      
      </View>  
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
    },
    titulo: {
      paddingVertical: 35,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
    },
    nome: {backgroundColor: '#ff9922', paddingVertical: 15, fontSize: 25},
    view0: {backgroundColor: '#ff944d'},
    txtinputtel: {
    paddingVertical: 15,
    backgroundColor: '#ffffff',borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1
    },
    txtinput: {backgroundColor: '#ffffff',borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1},    
  })
  
  export default App;