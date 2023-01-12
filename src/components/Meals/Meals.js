import { Fragment } from "react"
import MealsAvailable from "./MealsAvailable"
import MealsSummary from "./MealsSummary"
const Meals = (props)=>{
return(
    <Fragment>
        <MealsSummary/>
        <MealsAvailable/>
    </Fragment>
)
}
export default Meals