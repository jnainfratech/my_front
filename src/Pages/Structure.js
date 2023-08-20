import React, { useEffect, useState } from 'react'
import './Structure.css'
import NavBar from '../Components/NavBar'
import { Container } from '@mui/material'
import StructureButton from '../Components/StructureButton'
import { useDispatch, useSelector } from 'react-redux'
import { check, genrate, recheck } from '../Slice/strucureSlice'
import ReactPanZoom from 'react-image-pan-zoom-rotate'
import CircularProgress from '@mui/material/CircularProgress';
import stru from '../Images/section.png'
import pln1 from '../Images/plan1.png'
import pln2 from '../Images/plan2.png'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Structure() {
    const structureData = useSelector((state)=>state.strcture?.structureData)
    const [processdata, setProcessdata] = useState([]);


    const [showInput, setShowInput] = useState(false);
    const [volume,setVolume] = useState(0)
    const [stageing_height,setStageingHeight] =useState(0)
    const [elevation,setElevation] =  useState(0)
    const [ wh,setWh] = useState(0)
    const [tbwh,setTbwh] = useState(0)
    const[dtbw,setDtbw] =  useState(0)
    const [twb,setTwb]  =useState(0)
    const [r,setR] = useState(0)
    const [ncr,setNcr] =  useState(0)
    const [dl,setDl] = useState(0)
    const [nl,setNl] = useState(0)
    const [dbw4,setDbw4] = useState(0)
    const[bw4,setBw4] = useState(0)
    const[tl,setTl] = useState(0)
    const[ver,setVer] = useState(0)
    const[dbw3,setDbw3] = useState(0)
    const[bw3,setBw3] = useState(0)
    const[tdom1,setTdom1] = useState(0)
    const[tdom2,setTdom2] = useState(0)
    const[tdom3,setTdom3] = useState(0)
    const[tcon,setTcon] =  useState(0)
    const[bw2,setBw2] = useState(0)
    const[dbw2,setDbw2] = useState(0)
    const[cr,setCr] = useState(0)
    const[harch1,setHarch1] = useState(0)
    const[parch2,setParch2] = useState(0)
    const[watlevv,setWatlevv] = useState(0)
    const[ttb,setTtb] = useState(0)
    const[dttb,setDttb] = useState(0)
    const[t3,setT3] = useState(0)
    const[df,setDf] = useState(0)
    const[dbw,setDbw] = useState(0)
    const[bw,setBw] = useState(0)
    const[sbc,setSbc] = useState(0)
    const[tdf,setTdf] = useState(0)
    const[aw,setAw] = useState(0)
    const[no_of_s,setNo_of_s] = useState(0)
    const [seismiczone,setSeismiczone] =  useState(0.16)
    const [importencefactor,setImportencefactor] = useState(1.25)
    const [reductionfactor,setReductionfactor] =  useState(2.45)
    const [basic_wind_speed,setBasic_wind_speed] = useState(50)
    const [wind_k1,setWind_k1] = useState(1)
    const [wind_k3,setWind_k3] = useState(1)
    const [project_name,setProject_name] = useState("")
    const [doc_no,setDoc_no] = useState("")
    const [company_name,setCompany_name] = useState("")
    const [title,setTitle] = useState("")
    const [Rev,setRev] = useState("")
    const [design,setDesign] = useState("")
    const [check1,setCheck1] = useState("")
    const [date,setDate] = useState("")
    // const [processdata,setProcessdata] = useState()

 

    const dispatch =  useDispatch()
    
    const loading =  useSelector((state)=>state.strcture?.loading)
    const handleNextStep = ()=>{
        const data = { 
            volume:volume,
            stageing_height:stageing_height,
            elevation :elevation
        }
        dispatch(check(data))
        setShowInput(!showInput)
    }
    const handleGenrate = ()=>{
        const data = {
            vol: volume,
            st: stageing_height,
            ele: elevation,
            ncr: ncr,
            cr: cr,
            aw: aw,
            bw: bw,
            t1: tl,
            t3: t3,
            tbw: twb,
            tdf: tdf,
            parc2: parch2,
            tcone: tcon,
            tbwt: tbwh,
            df: df,
            dtbw: dtbw,
            n1: nl,
            ver: ver,
            harc1: harch1,
            tdome1: tdom1,
            tdome2: tdom2,
            tdome3: tdom3,
            ttb: ttb,
            dttb: dttb,
            watlevv: watlevv,
            dbw: dbw,
            r: r,
            d1: dl,
            wh: wh,
            bw4: bw4,
            dbw4: dbw4,
            bw3: bw3,
            dbw3: dbw3,
            bw2: bw2,
            dbw2: dbw2,
            sbc:sbc,
            no_o_s:no_of_s,
            Category:selectedValue,
            soil_type:soiltype,
            seismiczone: seismiczone,
            importencefactor: importencefactor,
            reductionfactor: reductionfactor,
            basic_wind_speed: basic_wind_speed,
            wind_k1: wind_k1,
            wind_k3: wind_k3,
            project_name:project_name,
            doc_no: doc_no,
            company_name: company_name,
            title: title,
            Rev: Rev,
            design: design,
            check: check1,
            date: date
        }
        dispatch(genrate(data))
    }
    const handleUpdate = ()=>{
        const data = {
            vol: Number(volume),
            st:  Number(stageing_height),
            ele: Number(elevation),
            ncr: Number(ncr),
            cr: Number(cr),
            aw: Number(aw),
            bw: Number(bw),
            t1: Number(tl),
            t3: Number(t3),
            tbw: Number(twb),
            tdf: Number(tdf),
            parc2: Number(parch2),
            tcone: Number(tcon),
            tbwt: Number(tbwh),
            df: Number(df),
            dtbw: Number(dtbw),
            n1: Number(nl),
            ver: Number(ver),
            harc1: Number(harch1),
            tdome1:Number(tdom1),
            tdome2: Number(tdom2),
            tdome3:Number(tdom3),
            ttb: Number(ttb),
            dttb: Number(dttb),
            watlevv:Number(watlevv),
            dbw: Number(dbw),
            r: Number(r),
            d1: Number(dl),
            wh: Number(wh),
            bw4: Number(bw4),
            dbw4: Number(dbw4),
            bw3: Number(bw3),
            dbw3: Number(dbw3),
            bw2:Number(bw2),
            dbw2: Number(dbw2),
            sbc: Number(sbc),
            no_o_s:Number(no_of_s),
            Category:selectedValue,
            soil_type:soiltype,
            seismiczone: seismiczone,
            importencefactor: importencefactor,
            reductionfactor: reductionfactor,
            basic_wind_speed: basic_wind_speed,
            wind_k1: wind_k1,
            wind_k3: wind_k3,
            project_name:project_name,
            doc_no: doc_no,
            company_name: company_name,
            title: title,
            Rev: Rev,
            design: design,
            check: check1,
            date: date


        }
        console.log("reccheck my data",data)
        dispatch(recheck(data))
    }
    useEffect(()=>{
        console.log("my  data nigger",structureData)
        setAw(structureData?.aw)
        setBw(structureData?.bw)
        setBw2(structureData?.bw2)
        setBw3(structureData?.bw3)
        setBw4(structureData?.bw4)
        setCr(structureData?.cr)
        setDbw(structureData?.dbw)
        setDbw2(structureData?.dbw2)
        setDbw3(structureData?.dbw3)
        setDbw4(structureData?.dbw4)
        setR(structureData?.r)
        setDf(structureData?.df)
        setDl(structureData?.d1)
        setDtbw(structureData?.dtbw)
        setDttb(structureData?.dttb)
        setElevation(structureData?.ele)
        setHarch1(structureData?.harc1)
        setNcr(structureData?.ncr)
        setNl(structureData?.n1)
        setParch2(structureData?.parc2)
        setSbc(structureData?.sbc)
        setT3(structureData?.t3)
        setTbwh(structureData?.tbwt)
        setTcon(structureData?.tcone)
        setTdf(structureData?.tdf)
        setTdom1(structureData?.tdome1)
        setTdom2(structureData?.tdome2)
        setTdom3(structureData?.tdome3)
        setTl(structureData?.t1)
        setTtb(structureData?.ttb)
        setTwb(structureData?.tbw)
        setVer(structureData?.ver)
        setVolume(structureData?.vol)
        setWatlevv(structureData?.watlevv)
        setWh(structureData?.wh)
        setSbc(structureData?.sbc)
        setNo_of_s(structureData?.no_o_s)
        // setProcessdata(
        //     structureData?.data?.map(item => {
        //       const parts = item.split(' '); // Split the string by spaces
        //       console.log("split part",parts)
        //       const label = parts.slice(0, -1).join(' ');// Join all parts except the last one (numbers)
        //       console.log("label label",label)
        //       const numbers = parts.slice(-2).map(Number);// Convert the last part(s) to numbers
        //       console.log("number",numbers)
        //       return { label, numbers };
        //     })
        //   );

        },[structureData])

    const [selectedValue, setSelectedValue] = useState('Category-1');
    const [soiltype,setSoiltype] = useState('Soft soil');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const handleSoil = (event)=>{
        setSoiltype(event.target.value)
    }
    useEffect(()=>{
        const resultObject = {};

        structureData?.data?.forEach(item => {
        const parts = item.split(' ');
        const numbers = parts.slice(-2).map(Number); // Get the last two parts as numbers
        const label = parts.slice(0, -2).join(' '); // Join the remaining parts as the label
        numbers.forEach(number => {
            if (!resultObject[number]) {
            resultObject[number] = [];
            }
            resultObject[number].push(label);
        });
        });
        setProcessdata(resultObject)
    },[structureData])
    console.log("process data",processdata)
    // useEffect(() => {
    //     const processedData = {};
        
    //     structureData?.data?.forEach(item => {
    //       const parts = item.split(' ');
    //       const label = parts.slice(0, -1).join(' ');
    //       const number = Number(parts.slice(-1)[0]);
          
    //       if (!processedData[number]) {
    //         processedData[number] = [];
    //       }
    //       processedData[number].push(label);
    //     });
    
    //     const finalProcessdata = Object.entries(processedData).map(([number, labels]) => ({
    //       number: Number(number),
    //       labels,
    //     }));
    
    //     setProcessdata(finalProcessdata);
    //   }, [structureData]);
    //   console.log("process data",processdata)
  return (

    <div>
      
        <NavBar />
        <div className='structurehero'>
            <Container>
                <span className='tranhead'>Structure</span>
            </Container>
        </div>
        <div>
            <Container >
                <p className='structuretxt'>Home > Structure</p>
            </Container>
        </div>
        <Container className='struhero'>
            <div className='struhero'>
            <div>
                <StructureButton />
            </div>
            <div>
                { loading ? 
                <Container>
                    <div className='loader' >
                        <CircularProgress />
                    </div>
                </Container> : 
                <button className='strucnext' disabled={showInput} onClick={handleNextStep} >NEXT STEP</button>
                }
            </div>
            </div>
        </Container>
       
           
        <Container>  
        <div  className ="voldiv" style={{width:"60%"}}>
                <p className='validationtxt'>Make sure you have atleast 20 m-point!</p>
                <p className='validationtxt'>How this works ? </p>
                <div className='strucform'>
                    <p className='structlabel'>1. Volume (KL)</p>
                    <input className='structinput' onChange={(e)=>setVolume(e.target.value)} />
                </div>
                <div className='strucform'>
                    <p className='structlabel'>2. Staging Height (mm)</p>
                    <input  className='structinput' onChange={(e)=>setStageingHeight(e.target.value)} />
                </div>
                <div className='strucform'>
                    <p className='structlabel'>3. Elevation (m)</p>
                    <input className='structinput' onChange={(e)=>setElevation(e.target.value)} />
                </div>
        </div>
        </Container>  
        
        {showInput  &&  !loading && (
        <Container >
    <div className='imagc'>
        <div style={{width:"100%"}}>
            <div className='strucform'>
                <p className='structlabel'>4. Wh (mm)</p>
                <input className='structinput' value={wh} onChange={(e)=>setWh(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '4' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           

            <div className='strucform'>
                <p className='structlabel'>5. Tbwt (mm)</p>
                <input className='structinput'value={tbwh} onChange={(e)=>setTbwh(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '5' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
          
            
            <div className='strucform'>
                <p className='structlabel'>6. Dtbw (mm)</p>
                <input className='structinput'value={dtbw} onChange={(e)=>setDtbw(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '6' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>7. Tbw (mm)</p>
                <input className='structinput' value={twb} onChange={(e)=>setTwb(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '7' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            
            <div className='strucform'>
                <p className='structlabel'>8. r (mm)</p>
                <input className='structinput' value={r} onChange={(e)=>setR(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '8' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>

            <div className='strucform'>
                <p className='structlabel'>9. Ncr (no of columns)</p>
                <input className='structinput' value={ncr} onChange={(e)=>setNcr(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '9' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>10. Dl (mm)</p>
                <input className='structinput' value={dl} onChange={(e)=>setDl(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '10' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>11. Nl (no of tie beams)</p>
                <input className='structinput' value={nl} onChange={(e)=>setNl(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '11' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>12. Dbw4 (mm)</p>
                <input className='structinput' value={dbw4} onChange={(e)=>setDbw4(e.target.value)}  />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '12' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>13. Bw4 (mm)</p>
                <input className='structinput' value={bw4} onChange={(e)=>setBw4(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '13' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>14. Tl (mm)</p>
                <input className='structinput' value={tl}  onChange={(e)=>setTl(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '14' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
         
            <div className='strucform'>
                <p className='structlabel'>15. Dbw3 (mm)</p>
                <input className='structinput' value={dbw3} onChange={(e)=>setDbw3(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '15' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>16. Bw3 (mm)</p>
                <input className='structinput' value={bw3} onChange={(e)=>setBw3(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '16' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>17. Tdom1 (mm)</p>
                <input className='structinput' value={tdom1} onChange={(e)=>setTdom1(e.target.value)} />
            </div>
           
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '17' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            <div className='strucform'>
                <p className='structlabel'>18. Tdom2 (mm)</p>
                <input className='structinput' value={tdom2}  onChange={(e)=>setTdom2(e.target.value)}/>
            </div>
            
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '18' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            <div className='strucform'>
                <p className='structlabel'>19. Tdom3 (mm)</p>
                <input className='structinput' value={tdom3}  onChange={(e)=>setTdom3(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '19' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>20. Tcon (mm)</p>
                <input className='structinput' value={tcon} onChange={(e)=>setTcon(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '20' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>21. Bw2 (mm)</p>
                <input className='structinput'  value={bw2} onChange={(e)=>setBw2(e.target.value)}/>
            </div>
            
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '21' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
          
            <div className='strucform'>
                <p  className='structlabel'>22. Dbw2 (mm)</p>
                <input className='structinput' value={dbw2} onChange={(e)=>setDbw2(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '22' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            <div>
           
            <div className='strucform'>
                <p className='structlabel'>23. Cr (mm)</p>
                <input className='structinput' value={cr}  onChange={(e)=>setCr(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '23' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            <div>
            
            <div className='strucform'>
                <p className='structlabel'>24. Harch1 (mm)</p>
                <input className='structinput' value={harch1} onChange={(e)=>setHarch1(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '24' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>25. Parch2 (mm)</p>
                <input className='structinput' value={parch2} onChange={(e)=>setParch2(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '25' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>26. Watlevv (mm)</p>
                <input className='structinput' value={watlevv}  onChange={(e)=>setWatlevv(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '26' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>27. Ttb (mm)</p>
                <input className='structinput' value={ttb}  onChange={(e)=>setTtb(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '27' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>28. Dttb (mm)</p>
                <input className='structinput' value={dttb}  onChange={(e)=>setDttb(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '28' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>29. T3 (mm)</p>
                <input className='structinput' value={t3} onChange={(e)=>setT3(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '29' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>30. Df (mm)</p>
                <input className='structinput' value={df} onChange={(e)=>setDf(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '30' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>31. Dbw (mm)</p>
                <input className='structinput' value={dbw} onChange={(e)=>setDbw(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '31' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>32. Bw (mm)</p>
                <input className='structinput' value={bw} onChange={(e)=>setBw(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '32' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
           
            <div className='strucform'>
                <p className='structlabel'>33. Sbc (T/m2)</p>
                <input className='structinput' value={sbc} onChange={(e)=>setSbc(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '33' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
          
            <div className='strucform'>
                <p className='structlabel'>34. Tdf (mm)</p>
                <input className='structinput' value={tdf} onChange={(e)=>setTdf(e.target.value)} />
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '34' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
          
            <div className='strucform'>
                <p className='structlabel'>35. Aw (mm)</p>
                <input className='structinput' value={aw} onChange={(e)=>setAw(e.target.value)}/>
            </div>
            <div>
                {Object.entries(processdata).map(([key, values], index) => (
                    key === '35' && (
                    <div key={index}>
                        {values.map((value, innerIndex) => (
                        <p className='validationtxt' key={innerIndex}>{value}</p>
                        ))}
                    </div>
                    )
                ))}
            </div>
        
            <div className='strucform'>
                <p className='structlabel'>36. No_of_steps in each stair </p>
                <input className='structinput' value={no_of_s} onChange={(e)=>setNo_of_s(e.target.value)}/>
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>37. Category</p>
                <FormControl style={{  width: "400px",height:"100px"}}>
                    <InputLabel>Select an option</InputLabel>
                    <Select value={selectedValue} onChange={handleChange}>
                       
                        <MenuItem value="Category-1">Category-1</MenuItem>
                        <MenuItem value="Category-2">Category-2</MenuItem>
                        <MenuItem value="Category-3">Category-3</MenuItem>
                        <MenuItem value="Category-4">Category-4</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='strucform'>
                <p className='structlabel'>38. Seismiczone</p>
                <input className='structinput' value={seismiczone} onChange={(e)=>setSeismiczone(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>39. Importencefactor</p>
                <input className='structinput' value={importencefactor} onChange={(e)=>setImportencefactor(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>40. Reductionfactorfactor</p>
                <input className='structinput' value={reductionfactor} onChange={(e)=>setReductionfactor(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>41. Soil Type</p>
                <FormControl style={{  width: "400px"}}>
                    <InputLabel>Select an option</InputLabel>
                    <Select value={soiltype} onChange={handleSoil}>
                    
                        <MenuItem value="Soft soil">Soft soil</MenuItem>
                        <MenuItem value="Rocky">Rocky</MenuItem>
                        <MenuItem value="Medium soil">Medium soil</MenuItem>
                        
                    </Select>
                </FormControl>
            </div>
            <div className='strucform'>
                <p className='structlabel'>42. Basic Wind Speed</p>
                <input className='structinput' value={basic_wind_speed} onChange={(e)=>setBasic_wind_speed(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>43. Wind k1 </p>
                <input className='structinput' value={wind_k1} onChange={(e)=>setWind_k1(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>44. Wind k3 </p>
                <input className='structinput' value={wind_k3} onChange={(e)=>setWind_k3(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>45. Project name</p>
                <input className='structinput' value={project_name} onChange={(e)=>setProject_name(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>46. Document number</p>
                <input className='structinput' value={doc_no} onChange={(e)=>setDoc_no(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>47. Company Name</p>
                <input className='structinput' value={company_name} onChange={(e)=>setCompany_name(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>48. Title</p>
                <input className='structinput' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>49. Revision number</p>
                <input className='structinput' value={Rev} onChange={(e)=>setRev(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>50. Designed by</p>
                <input className='structinput' value={design} onChange={(e)=>setDesign(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>51. Checked by</p>
                <input className='structinput' value={check1} onChange={(e)=>setCheck1(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>52. Date</p>
                <input className='structinput' value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>
            {/* <div>
                {structureData?.data?.map((item)=>{
                    return(
                    <div>
                        <p className='validationtxt'>{item}</p>
                    </div>
                    )
                })}
            </div> */}

                    
            {structureData?.data?.length  ?
            <div>
                { loading  ? 
                <Container>
                    <div className='loader' >
                        <CircularProgress />
                    </div>
                </Container> :
                <button className='valapi' onClick={handleUpdate}>Update</button>
                }        
            </div>
            : 
            <div>
                <button className='valapi' onClick={handleGenrate}>Generate</button>
            </div>}
            
          
           
            </div>
            </div>
                <div className='imagecontainer'>
                        <ReactPanZoom
                            image={stru}
                            alt='section'
                        />
                        <ReactPanZoom
                            image={pln1}
                            alt='plan'
                        />
                        <ReactPanZoom
                            image={pln2}
                            alt='plan'
                        />
                </div>
            
       </div>
       </div>
        </Container>
      )}
    </div>
  )
}

export default Structure