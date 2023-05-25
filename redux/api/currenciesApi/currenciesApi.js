import axiosInstance from "../axios";
import {API} from "../../../constants";
const secret = API.SECRET_KEY;
const secretFormat = `?access_key=${secret}`;
export const getRatesFromASource = async () => {
	const endPoint = API.END_POINTS.LIVE + secretFormat;
	const response = await axiosInstance(endPoint);
	return response;
};
