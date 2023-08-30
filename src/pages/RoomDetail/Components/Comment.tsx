import React from 'react';
import {
  CommentContent,
  CommentContentWrapper,
  CommentDate,
  CommentUserAvatar,
  CommentUsername,
  CommentUserWrapper,
  CommentWrapper,
  CreateCommentWrapper,
  SubmitButton,
  SubmitCommentWrapper,
  TotalComment,
  TotalContent,
} from './styled';
import {
  findCommentByRoomId,
  selectAccount,
  uploadCommentByRoomId,
} from 'slice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Row, Col, Input } from 'antd';
import { ConvertDateToVNDate } from 'utils';

const Comment = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [data, setData] = React.useState<any[]>([]);
  const account = useAppSelector(selectAccount);
  const [comment, setComment] = React.useState('');

  React.useEffect(() => {
    const getCommentById = async () => {
      try {
        const result = await dispatch(findCommentByRoomId(id)).unwrap();
        setData((result as any).content);
      } catch (e) {
        // console.log(e);
      }
    };

    if (id) {
      getCommentById();
    }
  }, [id]);

  const handleUploadComment = async () => {
    if (comment && account?.account?.user?.id) {
      try {
        const date = new Date();

        const result: any = await dispatch(
          uploadCommentByRoomId({
            maPhong: id,
            maNguoiBinhLuan: account?.account?.user?.id,
            ngayBinhLuan: date.toString(),
            noiDung: comment,
          })
        ).unwrap();

        if (result?.content) {
          data.push({
            avatar: account?.account?.user?.avatar,
            id: result.content.id,
            ngayBinhLuan:
              `${date.getDate()}` +
              '/' +
              `${date.getMonth()}` +
              '/' +
              `${date.getFullYear()}`,
            noiDung: result.content.noiDung,
            saoBinhLuan: result.content.saoBinhLuan,
            tenNguoiBinhLuan: account?.account?.user?.name,
          });

          setData([...data]);
          setComment('');
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <CommentWrapper>
      <TotalComment>{data?.length} đánh giá</TotalComment>
      <TotalContent>
        đánh giá Xếp hạng trung bình sẽ được hiển thị sau khi có 3 đánh giá
      </TotalContent>

      <Row gutter={[45, 45]}>
        {data?.map((item, index) => {
          return (
            <Col span={12} key={item.id} style={{ paddingRight: '94px' }}>
              <CommentUserWrapper>
                <CommentUserAvatar
                  src={
                    item.avatar || `${window.location.origin}/defaultImage.jpg`
                  }
                ></CommentUserAvatar>
                <CommentContentWrapper>
                  <CommentUsername>{item.tenNguoiBinhLuan}</CommentUsername>
                  <CommentDate>
                    {ConvertDateToVNDate(item?.ngayBinhLuan)}
                  </CommentDate>
                </CommentContentWrapper>
              </CommentUserWrapper>
              <CommentContent>{item.noiDung}</CommentContent>
            </Col>
          );
        })}
      </Row>
      {account.account ? (
        <CreateCommentWrapper>
          <CommentUserAvatar
            src={
              account.account?.user.avatar ||
              `${window.location.origin}/defaultImage.jpg`
            }
          ></CommentUserAvatar>
          <SubmitCommentWrapper>
            <Input.TextArea
              placeholder="Autosize height with minimum and maximum number of lines"
              autoSize={{ minRows: 4, maxRows: 6 }}
              onChange={e => {
                setComment(e.target.value);
              }}
              value={comment}
            />
            <SubmitButton onClick={e => handleUploadComment()}>
              Thêm bình luận
            </SubmitButton>
          </SubmitCommentWrapper>
        </CreateCommentWrapper>
      ) : (
        <></>
      )}
    </CommentWrapper>
  );
};

export default Comment;
