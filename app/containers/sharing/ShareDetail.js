// @flow
import { connect } from 'react-redux'
import * as shareActions from 'actions/share'
import type { Store } from 'utils/types'
import ShareDetail from 'components/sharing/ShareDetail'
import Share from 'models/Share'

const mapStateToProps = (state: Store) => ({
  share: state.shareList.selected,
  profile: state.profile,
  contactList: state.contactList
})

const mapDispatchToProps = dispatch => ({
  onFavoriteClickGenerator: (share: Share) => (
    () => (dispatch(shareActions.toggleFavorite(share.id)))
  ),
  onStartClickGenerator: (share: Share) => (
    () => (dispatch(shareActions.triggerDownload(share)))
  ),
  onPauseClickGenerator: (share: Share) => (
    () => (true) // TODO
  ),
  onStopClickGenerator: (share: Share) => (
    () => (true) // TODO
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(ShareDetail)
