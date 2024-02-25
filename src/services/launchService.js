import {spaceXPIService} from "./spaceXPIService";
import {urls} from "../constants/urls";

const launchService = {
    getAll:()=> spaceXPIService.get(urls.launches)
}
export {launchService}