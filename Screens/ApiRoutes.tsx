// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { View, Text, ScrollView } from 'react-native';
// import rncStyles from 'rncstyles';


// export default function ApiRoutes({ navigation, route }: any) {
//     const [courseList, setcourseList] = useState<any>([]);
//     const token = route.params?.token

//     const getData = () => {
//         let api = 'http://192.168.100.158:5000/courses';
//         axios.get(api, { headers: { Authorization: `Bearer ${token}` } })
//             .then((res: any) => {
//                 setcourseList([res.data]);
//                 console.log(res.data);
//             })
//             .catch((err: any) => {
//                 console.log(err);
//             });
//     }

//     useEffect(() => {
//         getData();
//     }, [token]);





//     return (
//         <>
//             <Text style={[rncStyles.fs1, rncStyles.TextBold,
//             rncStyles.textCenter, rncStyles.p1]}>Courses</Text>
//             {courseList.map((course: any, key: any) => (
//                 <View key={course._id} style={[rncStyles.shadow2, rncStyles.border1, rncStyles.m1]}>
//                     <Text style={[rncStyles.fs2, rncStyles.p1]}>{course.name}</Text>
//                     <Text>{course.shortName}</Text>
//                     <Text>{course._id}</Text>
//                 </View>
//             ))}

//         </>
//     );
// }










// +++++++++++++++++++Api Routes++++++++++++++++



import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, ScrollView } from 'react-native';
import rncStyles from 'rncstyles';


export default function ApiRoutes({ navigation, route }: any) {
    const [courseList, setcourseList] = useState<any>([]);
    const token = route.params?.token

    const getData = () => {
        let api = 'http://192.168.100.109:5000/courses';
        axios.get(api, { headers: { Authorization: `Bearer ${token}` } })
            .then((res: any) => {
                setcourseList([res.data]);
                console.log(res.data);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getData();
    }, [token]);





    return (
        <>
            <Text style={[rncStyles.fs1, rncStyles.TextBold,
            rncStyles.textCenter, rncStyles.p1]}>Courses</Text>
            {courseList.map((course: any, key: any) => (
                <View key={course._id} style={[rncStyles.shadow2, rncStyles.border1, rncStyles.m1]}>
                    <Text style={[rncStyles.fs2, rncStyles.p1]}>{course.name}</Text>
                    <Text>{course.shortName}</Text>
                    <Text>{course._id}</Text>
                </View>
            ))}

        </>
    );
}


// +++++++++++++++++++Api Routes++++++++++++++++
