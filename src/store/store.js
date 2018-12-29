import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		posts: {
			byId: {},
			allIds: [],
			isFetching: false,
		},
		comments: {
			byId: {},
			allIds: [],
			isFetching: false,
		}
	},
	getters: {},
	mutations: {
		requestPosts(state) {
			state.posts = {
				...state.posts,
				isFetching: !state.posts.isFetching
			}
		},
		receivePosts(state, payload) {
			state.posts = {
				...normalizeData(state.posts, payload.posts),
				isFetching: false,
			}
		},
		requestComments(state) {
			state.comments = {
				...state.comments,
				isFetching: !state.comments.isFetching
			}
		},
		receiveComments(state, payload) {
			state.comments = {
				...normalizeData(state.comments, payload.comments),
				isFetching: false,
			}
		},
		addPost(state, payload) {
			const { post } = payload;
			state.posts = {
				...state.posts,
				byId: {
					...state.posts.byId,
					[post.id]: post
				},
				allIds: [
					...state.posts.allIds,
					post.id
				]
			}
		},
		addComment(state, payload) {
			const { comment } = payload;
			state.comments = {
				...state.comments,
				byId: {
					...state.comments.byId,
					[comment.id]: comment
				},
				allIds: [
					...state.comments.allIds,
					comment.id
				]
			}
		},
		vote(state, payload) {
			state.posts = {
				...state.posts,
				byId: {
					...state.posts.byId,
					[payload.id]: {
						...state.posts.byId[payload.id],
						votes: payload.votes
					}
				}
			}
		}
	},
	actions: {
		async getPosts(context) {
			try {
				const res = await axios.get('http://localhost:8082/api/posts');
				context.commit('receivePosts', {posts: res.data})
			} catch (error) {
				context.commit('requestPosts')
			}
		},
		async putPost(context, post) {
			try {
				const res = await axios.post('http://localhost:8082/api/posts', post);
				context.commit('addPost',{
					post: res.data
				})
			} catch (error) {
				throw new Error(error);
			}
		},
		async getComments(context) {
			try {
				const res = await axios.get('http://localhost:8082/api/comments');
				context.commit('receiveComments', {comments: res.data})
			} catch (error) {
				context.commit('requestComments');
			}
		},
		async putComment(context, comment) {
			try {
				const res = await axios.post('http://localhost:8082/api/comments', comment);
				context.commit('addComment', {
					comment: res.data
				})
			} catch(error) {
				throw new Error(error);
			}
		},
		async putVote(context, payload) {
			const { direction, post_id } = payload;
			try {
				const res = await axios.get(`http://localhost:8082/api/posts/votes/${direction}/${post_id}`)
				context.commit('vote', res.data)
			} catch(error) {
				throw new Error(error)
			}
		}
	},
})

function normalizeData(obj, data) {
	let newState = obj;
	for (let element of data) {
		newState.byId[element.id] = element;
		newState.allIds.push(element.id);
	}
	return newState;
}