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



    const dispatch =  useDispatch()
    const structureData = useSelector((state)=>state.strcture?.structureData)
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
    },[structureData])

    const [selectedValue, setSelectedValue] = useState('');
    const [soiltype,setSoiltype] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    const handleSoil = (event)=>{
        setSoiltype(event.target.value)
    }
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
                <div className='strucform'>
                    <p className='structlabel'>Volume (KL)</p>
                    <input className='structinput' onChange={(e)=>setVolume(e.target.value)} />
                </div>
                <div className='strucform'>
                    <p className='structlabel'>Staging Height (mm)</p>
                    <input  className='structinput' onChange={(e)=>setStageingHeight(e.target.value)} />
                </div>
                <div className='strucform'>
                    <p className='structlabel'>Elevation (m)</p>
                    <input className='structinput' onChange={(e)=>setElevation(e.target.value)} />
                </div>
        </Container>
        
        {showInput  &&  !loading && (
        <Container >
    <div className='imagc'>
        <div style={{width:"100%"}}>
            <div className='strucform'>
                <p className='structlabel'>Wh (mm)</p>
                <input className='structinput' value={wh} onChange={(e)=>setWh(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tbwt (mm)</p>
                <input className='structinput'value={tbwh} onChange={(e)=>setTbwh(e.target.value)} />
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>Dtbw (mm)</p>
                <input className='structinput'value={dtbw} onChange={(e)=>setDtbw(e.target.value)}/>
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>Tbw (mm)</p>
                <input className='structinput' value={twb} onChange={(e)=>setTwb(e.target.value)}/>
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>r (mm)</p>
                <input className='structinput' value={r} onChange={(e)=>setR(e.target.value)}/>
            </div>
            

            <div className='strucform'>
                <p className='structlabel'>Ncr (no of columns)</p>
                <input className='structinput' value={ncr} onChange={(e)=>setNcr(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dl (mm)</p>
                <input className='structinput' value={dl} onChange={(e)=>setDl(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Nl (no of tie beams)</p>
                <input className='structinput' value={nl} onChange={(e)=>setNl(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dbw4 (mm)</p>
                <input className='structinput' value={dbw4} onChange={(e)=>setDbw4(e.target.value)}  />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Bw4 (mm)</p>
                <input className='structinput' value={bw4} onChange={(e)=>setBw4(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tl (mm)</p>
                <input className='structinput' value={tl}  onChange={(e)=>setTl(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Ver (mm)</p>
                <input className='structinput' value={ver} onChange={(e)=>setVer(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dbw3 (mm)</p>
                <input className='structinput' value={dbw3} onChange={(e)=>setDbw3(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Bw3 (mm)</p>
                <input className='structinput' value={bw3} onChange={(e)=>setBw3(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tdom1 (mm)</p>
                <input className='structinput' value={tdom1} onChange={(e)=>setTdom1(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tdom2 (mm)</p>
                <input className='structinput' value={tdom2}  onChange={(e)=>setTdom2(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tdom3 (mm)</p>
                <input className='structinput' value={tdom3}  onChange={(e)=>setTdom3(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tcon (mm)</p>
                <input className='structinput' value={tcon} onChange={(e)=>setTcon(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Bw2 (mm)</p>
                <input className='structinput'  value={bw2} onChange={(e)=>setBw2(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dbw2 (mm)</p>
                <input className='structinput' value={dbw2} onChange={(e)=>setDbw2(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Cr (mm)</p>
                <input className='structinput' value={cr}  onChange={(e)=>setCr(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Harch1 (mm)</p>
                <input className='structinput' value={harch1} onChange={(e)=>setHarch1(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Parch2 (mm)</p>
                <input className='structinput' value={parch2} onChange={(e)=>setParch2(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Watlevv (mm)</p>
                <input className='structinput' value={watlevv}  onChange={(e)=>setWatlevv(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Ttb (mm)</p>
                <input className='structinput' value={ttb}  onChange={(e)=>setTtb(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dttb (mm)</p>
                <input className='structinput' value={dttb}  onChange={(e)=>setDttb(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>T3 (mm)</p>
                <input className='structinput' value={t3} onChange={(e)=>setT3(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Df (mm)</p>
                <input className='structinput' value={df} onChange={(e)=>setDf(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dbw (mm)</p>
                <input className='structinput' value={dbw} onChange={(e)=>setDbw(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Bw (mm)</p>
                <input className='structinput' value={bw} onChange={(e)=>setBw(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Sbc (T/m2)</p>
                <input className='structinput' value={sbc} onChange={(e)=>setSbc(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tdf (mm)</p>
                <input className='structinput' value={tdf} onChange={(e)=>setTdf(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Aw (mm)</p>
                <input className='structinput' value={aw} onChange={(e)=>setAw(e.target.value)}/>
            </div>
        
            <div className='strucform'>
                <p className='structlabel'>No_of_steps in each stair </p>
                <input className='structinput' value={no_of_s} onChange={(e)=>setNo_of_s(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Category</p>
                <FormControl style={{  width: "400px",height:"100px"}}>
                    <InputLabel>Select an option</InputLabel>
                    <Select value={selectedValue} onChange={handleChange}>
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value="Category-1">Category-1</MenuItem>
                        <MenuItem value="Category-2">Category-2</MenuItem>
                        <MenuItem value="Category-3">Category-3</MenuItem>
                        <MenuItem value="Category-4">Category-4</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Seismiczone</p>
                <input className='structinput' value={seismiczone} onChange={(e)=>setSeismiczone(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Importencefactor</p>
                <input className='structinput' value={importencefactor} onChange={(e)=>setImportencefactor(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Reductionfactorfactor</p>
                <input className='structinput' value={reductionfactor} onChange={(e)=>setReductionfactor(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Soil Type</p>
                <FormControl style={{  width: "400px"}}>
                    <InputLabel>Select an option</InputLabel>
                    <Select value={soiltype} onChange={handleSoil}>
                        <MenuItem value="" style={{height:"100%"}}>
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value="Soft soil">Soft soil</MenuItem>
                        <MenuItem value="Rocky">Rocky</MenuItem>
                        <MenuItem value="Medium soil">Medium soil</MenuItem>
                        
                    </Select>
                </FormControl>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Basic Wind Speed</p>
                <input className='structinput' value={basic_wind_speed} onChange={(e)=>setBasic_wind_speed(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Wind k1 </p>
                <input className='structinput' value={wind_k1} onChange={(e)=>setWind_k1(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Wind k3 </p>
                <input className='structinput' value={wind_k3} onChange={(e)=>setWind_k3(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Project name</p>
                <input className='structinput' value={project_name} onChange={(e)=>setProject_name(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Document number</p>
                <input className='structinput' value={doc_no} onChange={(e)=>setDoc_no(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Company Name</p>
                <input className='structinput' value={company_name} onChange={(e)=>setCompany_name(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Title</p>
                <input className='structinput' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Revision number</p>
                <input className='structinput' value={Rev} onChange={(e)=>setRev(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Designed by</p>
                <input className='structinput' value={design} onChange={(e)=>setDesign(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Checked by</p>
                <input className='structinput' value={check1} onChange={(e)=>setCheck1(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Date</p>
                <input className='structinput' value={date} onChange={(e)=>setDate(e.target.value)}/>
            </div>

            <div>
                {structureData?.data?.map((item)=>{
                    return(
                    <div>
                        <p className='validationtxt'>{item}</p>
                    </div>
                    )
                })}
            </div>
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
        </Container>
      )}
    </div>
  )
}

export default Structure