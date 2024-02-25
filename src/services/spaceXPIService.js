import axios from "axios";
import {spaceXURL} from "../constants/urls";

const spaceXPIService = axios.create({baseURL: spaceXURL})

export {spaceXPIService}