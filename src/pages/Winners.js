import { Card, Typography, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

const Winners=()=> {
    const [results, setResults] = useState([]);
    const [president, setPresident]= useState([]);

    useEffect(() => {
        // load data as soon as component is requested
        try{
            getResultSet();
        }
        catch(err){
            console.log(err);
        }

    }, [])

    const getResultSet = async () =>{
        // firebase.getCandidatesResults("vicePresident").then((data)=> {
        //     setResults(data);
        //     console.log(results);
        // });
        // firebase.getCandidatesResults("president").then((data)=>{
        //     setPresident(data);
        // });
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <Grid container direction="row" justify="space-around" alignItems="flex-start" >
                <div style={{ width: '100%', backgroundColor: '#f18658', marginTop: '2%', marginBottom: '2%' }}>
                    <Typography style={{ textAlign: 'center' }} variant='h3'>Results </Typography>
                </div>
                <Grid item xs={12} sm={8} md={5} lg={5} >
                    <Card elevation={5} style={{ minWidth: '100px' }}>
                        <div style={{ width: '100%', backgroundColor: '#f18658', marginTop: '2%', marginBottom: '2%' }}>
                            <Typography style={{ textAlign: 'center' }} variant='h5'>President </Typography>
                        </div>

                        {/*{!president && <p>Loading...</p>}*/}

                        {/*{president  &&*/}
                        {/*    president.map((data, index) => (*/}
                        {/*            <div key={index}>*/}
                        {/*                <h3>{data.title}:{data.value}</h3>*/}
                        {/*            </div>*/}
                        {/*        )*/}
                        {/*    */}
                        {/*    )*/}
                        {/*}*/}

                        {president.length===0 ?
                            <h5> <i>Loading...</i></h5>
                                :
                            president.map((data, index) => (
                                    <div key={index}>
                                        <h3>{data.title}:{data.value}</h3>
                                    </div>
                                )

                            )
                        }


                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={5} lg={5}>
                    <Card elevation={5} style={{ minWidth: '100px' }}>
                    <div style={{ width: '100%', backgroundColor: '#f18658', marginTop: '2%', marginBottom: '2%' }}>
                        <Typography style={{ textAlign: 'center' }} variant='h5'>Vice President </Typography>
                    </div>

                    {/*{!results && <p>Loading...</p>}*/}
                    {/*{results &&*/}
                    {/*    results.map((data, index) => {*/}
                    {/*        return <div key={index}>*/}
                    {/*            <h3>{data.title}: {data.value}</h3>*/}
                    {/*        </div>*/}
                    {/*    })*/}
                    {/*}*/}

                    {results.length===0 ?
                        <h5> <i>Loading...</i></h5>
                            :
                        results.map((data, index) => {
                            return <div key={index}>
                                <h3>{data.title}: {data.value}</h3>
                            </div>
                        })
                    }

                </Card>
             </Grid>
            </Grid>
           </div> 
        
    )
}

export default Winners;
