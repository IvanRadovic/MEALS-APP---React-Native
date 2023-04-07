import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) =>  {

  /* -- Rendering Cateogry Item --- */
  const renderCategoryItem = (itemData) => {
    /* -- Navigate between screens */
    const pressNavigate = () => {
      navigation.navigate('Meals Overview', {
        categoryId: itemData.item.id,
        
      });
    }
    return (
      <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={pressNavigate} 
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;