import { ScrollView } from 'react-native';
import { IconButton, PaperProvider, Searchbar, Title, useTheme } from 'react-native-paper';
import peopleData from "./assets/data.json";
import { AvatarUI } from "./components/Avatar";

import styles from "./styles";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

interface Student{
  id: number;
  name: string;
  email: string;
  photo_url: string;
}

function App() { 
  const theme = useTheme(); 
  const [students, setStudents] = useState<Student[]>();
  const [searchQuery, setSearchQuery] = useState('');
  const [isAZ, setIsAZ] = useState(true);

  function removeStudentById(id: number){
    setStudents(students?.filter(student => student.id !== id));
  }

  function toggleSort(){
    setIsAZ(!isAZ);
  }

  // create id for each student
  useEffect(() => {
    setStudents(peopleData.map((student, index) => {
      return {
        ...student,
        id: index
      };
    }))
  }, []);
  
  const avatarList = (students ?? [])
    .filter(students => students.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      // dont sort if not searching
      if(searchQuery === "") return 0;
      if(isAZ) return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    })
    .map(people => <AvatarUI {...people} onDelete={removeStudentById}/>);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: theme.colors.background,
      }}
      contentContainerStyle={{
        rowGap:4,
      }}
    >
      <Title style={[styles.title, styles.paddingBig, {
        textAlign: "center",
      }]}>Students</Title>

      <Searchbar 
        placeholder='Search Students'
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          marginVertical: 16,
        }}
        right={(props => <IconButton 
            icon={isAZ ? "format-font-size-decrease" : "format-font-size-increase"} 
            size={24}
            onPress={toggleSort}
            {...props}
          />)}
      />

      {
        searchQuery !== "" && <Title style={{ textAlign: "center", marginBottom: 8}}>
          {avatarList.length === 0 ? "No Student Found" : `${avatarList?.length} students found`}
        </Title>
      }

      {avatarList}
    </ScrollView>
  );
}

export default function BaseApp() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
}