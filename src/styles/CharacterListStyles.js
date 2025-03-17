import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1A1A1D",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  voiceButton: {
    backgroundColor: '#FFD700',  
    padding: 15,                
    borderRadius: 50,          
    alignItems: 'center',       
    justifyContent: 'center',   
    width: 60,                  
    height: 60,                
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1,         
    shadowRadius: 5,          
    elevation: 3,              
  },
});
