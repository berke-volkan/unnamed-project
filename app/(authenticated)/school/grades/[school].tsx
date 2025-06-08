import { View, Text,Dimensions,StyleSheet } from 'react-native'
import React from 'react'
import {
  LineChart,
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';
import { Col, Row, Grid } from 'react-native-easy-grid';

const grade = () => {
  return (
<ScrollView>
  <View style={styles.container}>
    <Text style={{fontWeight:"bold",fontSize:20,marginLeft:10}}>Grades</Text>
<Grid>
  <Col size={30}>
    <Row style={styles.cell}><Text>Lesson</Text></Row>
    <Row style={styles.cell}><Text>Math</Text></Row>
    <Row style={styles.cell}><Text>Literature</Text></Row>
    <Row style={styles.cell}><Text>English</Text></Row>
    <Row style={styles.cell}><Text>History</Text></Row>
  </Col>

  <Col size={20}>
    <Row style={styles.cell}><Text>9th Grade Exam 1</Text></Row>
    <Row style={styles.cell}><Text>50</Text></Row>
    <Row style={styles.cell}><Text>68</Text></Row>
    <Row style={styles.cell}><Text>72</Text></Row>
    <Row style={styles.cell}><Text>60</Text></Row>
  </Col>

  <Col size={20}>
    <Row style={styles.cell}><Text>9th Grade Exam 2</Text></Row>
    <Row style={styles.cell}><Text>79</Text></Row>
    <Row style={styles.cell}><Text>74</Text></Row>
    <Row style={styles.cell}><Text>81</Text></Row>
    <Row style={styles.cell}><Text>77</Text></Row>
  </Col>

  <Col size={20}>
    <Row style={styles.cell}><Text>9th Grade Exam 3</Text></Row>
    <Row style={styles.cell}><Text>81</Text></Row>
    <Row style={styles.cell}><Text>82</Text></Row>
    <Row style={styles.cell}><Text>89</Text></Row>
    <Row style={styles.cell}><Text>88</Text></Row>
  </Col>

  <Col size={20}>
    <Row style={styles.cell}><Text>9th Grade Exam 4</Text></Row>
    <Row style={styles.cell}><Text>100</Text></Row>
    <Row style={styles.cell}><Text>91</Text></Row>
    <Row style={styles.cell}><Text>95</Text></Row>
    <Row style={styles.cell}><Text>93</Text></Row>
  </Col>
</Grid>

</View>
  <Text style={{fontWeight:'bold',marginLeft:10,fontSize:20}}>Math Grades</Text>
<LineChart
  data={{
    labels: [
      '9th  1.Exam',
      '9th 2.Exam',
      '9th 3.Exam',
      '9th 4.Exam',
    ],
    datasets: [
      {
        data: [50,79,81,100],
        strokeWidth: 2,
      },
    ],
  }}
  width={Dimensions.get('window').width - 16}
  height={220}
  chartConfig={{
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/>
  <Text style={{fontWeight:'bold',marginLeft:10,fontSize:20}}>Literatures Grades</Text>
<LineChart
  data={{
    labels: [
      '9th 1.Exam',
      '9th 2.Exam',
      '9th 3.Exam',
      '9th 4.Exam',
    ],
    datasets: [
      {
        data: [50,79,81,100],
        strokeWidth: 2,
      },
    ],
  }}
  width={Dimensions.get('window').width - 16}
  height={220}
  chartConfig={{
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/>
  <Text style={{fontWeight:'bold',marginLeft:10,fontSize:20}}>English Grades</Text>
<LineChart
  data={{
    labels: [
      '9th 1.Exam',
      '9th 2.Exam',
      '9th 3.Exam',
      '9th 4.Exam',
    ],
    datasets: [
      {
        data: [50,79,81,100],
        strokeWidth: 2,
      },
    ],
  }}
  width={Dimensions.get('window').width - 16}
  height={220}
  chartConfig={{
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/>
  <Text style={{fontWeight:'bold',marginLeft:10,fontSize:20}}>History Grades</Text>
<LineChart
  data={{
    labels: [
      '9th 1.Exam',
      '9th 2.Exam',
      '9th 3.Exam',
      '9th 4.Exam',
    ],
    datasets: [
      {
        data: [50,79,81,100],
        strokeWidth: 2,
      },
    ],
  }}
  width={Dimensions.get('window').width - 16}
  height={220}
  chartConfig={{
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/>

</ScrollView>
  )
}

export default grade


const styles = StyleSheet.create({
container: {
width: '100%',
height: 300,
padding: 16,
backgroundColor: '#fff',
},
cell: {
borderWidth: 1,
borderColor: '#ddd',
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
});