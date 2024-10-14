import {privateRoutes, publicRoutes} from '@/navigation';
import {ParamListBase} from '@react-navigation/native';

export type TRouteNames = (typeof privateRoutes)[number]['name'] &
  (typeof publicRoutes)[number]['name'] &
  ParamListBase;

export default TRouteNames;
