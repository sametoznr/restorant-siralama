import { StyleSheet, Text, View } from 'react-native'
import React ,{useState}from 'react'
import SearchBar from '../component/SearchBar'
import useresults from '../hooks/useresults'
import ResultsList from '../component/ResultsList';


export default function SearchScreen() {
  const[searchApi,results,errorMessage]=useresults();
  const [term, setTerm] = useState('')
  console.log(results);

  const filterResulstPrice=(price)=> {
    return results.filter((result)=>{
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
      term={term}
      onTermChange={setTerm} 
      onTermSubmit={()=>searchApi(term)}  />

       {
        errorMessage? <Text>{errorMessage}</Text>:null
       }
       {results.length==0 ? 
       (
             <></>
       ) : ( 
       <> 
       <ResultsList title='Uygun Fiyatlı Restorant'
      results={filterResulstPrice('₺')}/>

      <ResultsList title='Orta Fiyatlı Restorant'
      results={filterResulstPrice('₺₺')}/>
      
      <ResultsList title='Pahalı Fiyatlı Restorant'
      results={filterResulstPrice('₺₺₺')}
      />
      
      </> )}
      
    </View>
  );
}

const styles = StyleSheet.create({});