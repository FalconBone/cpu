import classes from './ValueWithInput.module.css'

const ValueWithInput = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.value}>
                {`${props.text}: ${props.value}`}
            </div>
            <div className={classes.label}>
                Критическое значение:
            </div>
            <div className={classes.input}>
                <input value={props.criticalValue} onChange={(e) => props.setCriticalValue(e.target.value)}/>
            </div>
        </div>
    )
}

export default ValueWithInput