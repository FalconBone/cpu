import ChartWrapper from "../Components/ChartWrapper/ChartWrapper"
import classes from '../App.module.css'
import { useEffect, useState } from "react"
import axios from "axios"


const Graphics = () => {

    const _MINUTE = 'minute', _HOUR = 'hour', _DAY = 'day', _WEAK = 'weak'
    
    const [time, setTime] = useState(_MINUTE)

    const [cpuTemp, setCpuTemp] = useState([])
    const [gpuTemp, setGpuTemp] = useState([])
    const [cpuLoad, setCpuLoad] = useState([])
    const [gpuLoad, setGpuLoad] = useState([])
    const [ramTemp, setRamTemp] = useState([])

    const fetchData = async () => {
        await axios.post('', {})
            .then((res) => {
                console.log(res);
            }) 
    }

    useEffect(() => {
        //fetchData()
    }, [time])

    return (
        <div className={classes.graphics}>
            <div className={classes.time_buttons}>
                <button onClick={() => setTime(_MINUTE)}>
                    Минута
                </button>
                <button onClick={() => setTime(_HOUR)}>
                    Час
                </button>
                <button onClick={() => setTime(_DAY)}>
                    День
                </button>
                <button onClick={() => setTime(_WEAK)}>
                    Неделя
                </button>
            </div>
            <div className={classes.cpu}>
                <ChartWrapper data={cpuTemp} color={''} text={'CPU Temperature'}/>
                <ChartWrapper data={gpuTemp} color={''} text={'CPU Load'}/>
            </div>
            <div className={classes.gpu}>
                <ChartWrapper data={cpuLoad} color={''} text={'GPU Temperature'}/>
                <ChartWrapper data={gpuLoad} color={''} text={'GPU Load'}/>
            </div>
            <div className={classes.ram}>
                <ChartWrapper data={ramTemp} color={''} text={'RAM Load'}/>
            </div>
        </div>
    )
}

export default Graphics