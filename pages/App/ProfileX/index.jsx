import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ExTouchableOpacity from '../../../components/ExTouchableOpacity';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUSBAR_HEIGHT,
} from '../../../constants';
import Post from '../../../components/Post';
import FriendsShowing from '../../../components/FriendShowing';
import HightlightPhotos from '../../../components/HightlightPhotos';
import ToolBar from '../Home/components/ToolBar';
import AppText from '../../../components/AppText';
import * as navigation from '../../../navigation/helpers';

const ProfileXScreen = () => {
  const isFriend = true;
  function onPressGoBackHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.superContainer}>
      <View style={styles.navigationBar}>
        <ExTouchableOpacity
          onPress={onPressGoBackHandler}
          style={styles.btnBack}
        >
          <FontAwesome5Icon name="arrow-left" size={20} />
        </ExTouchableOpacity>
        <ExTouchableOpacity style={styles.searchInput}>
          <FontAwesome5Icon
            name="search"
            color="gray"
            size={16}
          ></FontAwesome5Icon>
          <AppText
            style={{
              color: '#333',
              fontSize: 16,
              marginLeft: 10,
              fontWeight: '500',
            }}
          >
            Search
          </AppText>
        </ExTouchableOpacity>
      </View>
      <ScrollView bounces={false} style={styles.container}>
        <View style={styles.infoWrapper}>
          <View style={styles.avatarCoverWrapper}>
            <TouchableOpacity activeOpacity={0.8}>
              <Image
                style={styles.cover}
                source={{
                  uri: 'https://images.unsplash.com/photo-1674423094915-2546893e2636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                }}
              />
            </TouchableOpacity>
            <View style={styles.avatarWrapper}>
              <TouchableOpacity activeOpacity={0.9}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1674423094915-2546893e2636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.introWrapper}>
            <AppText style={styles.name}>Dao Van Luong</AppText>
            <AppText style={styles.subName}>(luongdao)</AppText>
            <AppText style={styles.introTxt}>
              skcnskcndkcdkmcdkmckdmcdkmc
            </AppText>
            <View style={styles.introOptionsWrapper}>
              <TouchableOpacity activeOpacity={0.8} style={styles.btnAddStory}>
                <FontAwesome5Icon
                  size={20}
                  color="#fff"
                  name={isFriend ? 'facebook-messenger' : 'user-plus'}
                />
                <AppText
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#fff',
                    marginLeft: 5,
                  }}
                >
                  {isFriend ? 'Send message' : 'Friend request'}
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.btnOption}>
                <FontAwesome5Icon
                  size={20}
                  color="#000"
                  name={isFriend ? 'user-check' : 'facebook-messenger'}
                />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.btnOption}>
                <FontAwesome5Icon size={20} color="#000" name="ellipsis-h" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.introListWrapper}>
            <View style={styles.introLine}>
              <FontAwesome5Icon
                size={20}
                color="#333"
                style={styles.introIcon}
                name="briefcase"
              />
              <AppText style={styles.introLineText}>
                Work at{' '}
                <AppText style={styles.introHightLight}>
                  Hust University
                </AppText>
              </AppText>
            </View>
            <View style={styles.introLine}>
              <FontAwesome5Icon
                size={20}
                color="#333"
                style={styles.introIcon}
                name="home"
              />
              <AppText style={styles.introLineText}>
                Live in{' '}
                <AppText style={styles.introHightLight}>Nghe An</AppText>
              </AppText>
            </View>
            <View style={styles.introLine}>
              <FontAwesome5Icon
                size={20}
                color="#333"
                style={styles.introIcon}
                name="map-marker-alt"
              />
              <AppText style={styles.introLineText}>
                From <AppText style={styles.introHightLight}>Nghe An</AppText>
              </AppText>
            </View>
            <View style={styles.introLine}>
              <FontAwesome5Icon
                size={20}
                color="#333"
                style={styles.introIcon}
                name="heart"
              />
              <AppText style={styles.introLineText}>
                Relationship{' '}
                <AppText style={styles.introHightLight}>
                  User Relationship
                </AppText>
              </AppText>
            </View>
            <View style={styles.introLine}>
              <FontAwesome5Icon
                size={20}
                color="#333"
                style={styles.introIcon}
                name="rss"
              />
              <AppText style={styles.introLineText}>
                Followed by{' '}
                <AppText style={styles.introHightLight}>40 </AppText>
                followers
              </AppText>
            </View>
            <View style={styles.introLine}>
              <FontAwesome5Icon
                size={20}
                color="#333"
                style={styles.introIcon}
                name="github"
              />
              <TouchableOpacity>
                <AppText style={styles.introLineText}>
                  https://youtube.com
                </AppText>
              </TouchableOpacity>
            </View>
            <View style={styles.introLine}>
              <FontAwesome5Icon
                size={20}
                color="#333"
                style={styles.introIcon}
                name="link"
              />
              <TouchableOpacity>
                <AppText style={styles.introLineText}>
                  kncdkdkmclksnvkjsjaskcmd
                </AppText>
              </TouchableOpacity>
            </View>
            <View style={styles.introLine}>
              <FontAwesome5Icon
                size={20}
                color="#333"
                style={styles.introIcon}
                name="ellipsis-h"
              />
              <TouchableOpacity>
                <AppText style={styles.introLineText}>
                  View more introductory information
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
          <HightlightPhotos
            photos={[
              {
                photo_url:
                  'https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              },
              {
                photo_url:
                  'https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              },
              {
                photo_url:
                  'https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              },
              {
                photo_url:
                  'https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              },
              {
                photo_url:
                  'https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              },
              {
                photo_url:
                  'https://images.unsplash.com/photo-1674231313303-ab9bd1196390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
              },
            ]}
          />
          <View
            style={{ borderBottomWidth: 0.5, borderBottomColor: '#ddd' }}
          ></View>
          <FriendsShowing
            friends={[
              {
                name: 'Dao Cam Tu',
                avatar_url: 'https://randomuser.me/api/portraits/women/79.jpg',
              },
            ]}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <ToolBar />
        </View>
        <ScrollView
          alignItems="center"
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.navigationsWrapper}
        >
          <TouchableOpacity style={styles.navigation}>
            <FontAwesome5Icon
              style={styles.navigationIcon}
              color="#000"
              size={20}
              name="images"
            />
            <AppText style={{ fontSize: 16, fontWeight: '500' }}>
              Images
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigation}>
            <FontAwesome5Icon
              style={styles.navigationIcon}
              color="#000"
              size={20}
              name="video"
            />
            <AppText style={{ fontSize: 16, fontWeight: '500' }}>
              Videos
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigation}>
            <FontAwesome5Icon
              style={styles.navigationIcon}
              color="#000"
              size={20}
              name="calendar-week"
            />
            <AppText style={{ fontSize: 16, fontWeight: '500' }}>
              Life event
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.navigation, ...styles.lastNavigation }}
          >
            <FontAwesome5Icon
              style={styles.navigationIcon}
              color="#000"
              size={20}
              name="music"
            />
            <AppText style={{ fontSize: 16, fontWeight: '500' }}>Music</AppText>
          </TouchableOpacity>
        </ScrollView>
        {Array(6)
          .fill(1)
          .map((_, index) => (
            <Post key={index} />
          ))}
      </ScrollView>
    </View>
  );
};

export default ProfileXScreen;

const styles = StyleSheet.create({
  superContainer: {},
  navigationBar: {
    height: 94,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  btnBack: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    height: 36,
    width: SCREEN_WIDTH - 36 - 15,
    borderRadius: 36,
    paddingHorizontal: 15,
  },
  container: {
    height: SCREEN_HEIGHT - (STATUSBAR_HEIGHT + 50),
  },
  infoWrapper: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  avatarCoverWrapper: {
    paddingBottom: 90,
    position: 'relative',
  },
  cover: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  avatarWrapper: {
    backgroundColor: '#000',
    position: 'absolute',
    borderRadius: 2000,
    left: (SCREEN_WIDTH - 30 - 180) / 2, //paddingHorizontal - avatarWidth
    bottom: 0,
  },
  avatar: {
    height: 180,
    width: 180,
    borderRadius: 2000,
    borderColor: '#fff',
    borderWidth: 5,
  },
  btnChangeCover: {
    backgroundColor: '#fff',
    position: 'absolute',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 2.5,
    bottom: 90 + 10,
    right: 10,
  },
  btnChangeAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 50,
    width: 45,
    height: 45,
    borderWidth: 2.5,
    borderColor: '#fff',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introWrapper: {
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
  },
  subName: {
    fontSize: 20,
    fontWeight: '500',
  },
  introTxt: {
    color: 'rgba(0,0,0,0.7)',
    marginTop: 10,
  },
  introOptionsWrapper: {
    marginTop: 15,
    flexDirection: 'row',
  },
  btnAddStory: {
    backgroundColor: '#318bfb',
    borderRadius: 5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH - 30 - 100 - 20, //paddingHorizontal optionBtnWidth, marginLeft
  },
  btnOption: {
    marginLeft: 10,
    borderRadius: 5,
    height: 40,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  introListWrapper: {
    paddingVertical: 10,
  },
  introLine: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  introIcon: {
    width: 30,
  },
  introLineText: {
    fontSize: 16,
    fontWeight: '400',
  },
  introHightLight: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  highlightPhotosWrapper: {
    flexDirection: 'row',
    borderRadius: 10,
    flexWrap: 'wrap',
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  highLightPhoto: {},
  photo: {
    width: (SCREEN_WIDTH - 42) / 3,
    height: (SCREEN_WIDTH - 42) / 3,
  },
  btnEditPublicDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd0eb',
    width: '100%',
    height: 40,
    borderRadius: 5,
  },
  friendsWrapper: {
    paddingVertical: 15,
  },
  friendsBar: {
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnFindFriends: {
    paddingHorizontal: 10,
  },
  friendGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  friendItem: {
    width: (SCREEN_WIDTH - 30 - 20) / 3,
    marginBottom: 15,
  },
  friendAvatar: {
    width: (SCREEN_WIDTH - 30 - 20) / 3,
    height: (SCREEN_WIDTH - 30 - 20) / 3,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#333',
  },
  btnViewAllFriends: {
    width: '100%',
    borderRadius: 5,
    height: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationsWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 15,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    height: 100,
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
  },
  navigation: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 48,
    marginHorizontal: 5,
  },
  lastNavigation: {
    marginRight: 25,
  },
  navigationIcon: {
    width: 30,
    alignItems: 'center',
  },
});
