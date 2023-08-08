import { Title, Wrapper, Image } from './styled';

type CategoryItemType = {
  title: string;
  image: string;
};

const CategoryItem = ({ title, image }: CategoryItemType) => {
  return (
    <Wrapper>
      <Image src={image} alt={'category image'}></Image>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default CategoryItem;
