import React ,{createContext,useState,useEffect}from 'react'
import uuid from 'react-uuid'
export const Covid19Data = createContext();

const Covid19 = (props) => {
const [results,setResults]=useState([]);   
const [isLoading,setLoading]=useState(true);
    
    useEffect(() => {
            setLoading(true)
        fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f7e5465559mshf80278a8387011ap1b5f37jsn2c8fda8798d1",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
.then(response => 
    response.json()
)
.then(results =>{
    const resultdata =results.response
    setLoading(false)
    getsourceData(resultdata);
    
})
.catch(err => {
	console.error(err);
});
        
    }, [])
        
  const  getsourceData = (resultdata) => {
       const item= resultdata.map(resultdata=> 
        ({ 
            Country:resultdata.country,
            Population:resultdata.population?resultdata.population:'-',
            Cases_new:resultdata.cases['new']?resultdata.cases['new']:'-',
            Cases_critical:resultdata.cases['critical']?resultdata.cases['critical']:'-',
            Cases_recovered:resultdata.cases['recovered']?resultdata.cases['recovered']:'-',
            Deaths_new:resultdata.deaths['new']? resultdata.deaths['new'] : '-'  ,
            Deaths_total:resultdata.deaths['total'],
            Key:uuid()
        }))
       setResults(item)
        
    };
   
    return (
        
        <>
        <Covid19Data.Provider value={{results,isLoading}}>{props.children}</Covid19Data.Provider>
        
          
        </>
    )
}

export default Covid19
