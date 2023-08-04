export type ThumbnailFormat = "Png"|"Jpeg"
export type ThumbnailReturnPolicy = "PlaceHolder"|"AutoGenerated"|"ForceAutoGenerated"

// [ ASSETS ] ////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/assets
export type AssetSize = "30x30"|"42x42"|"50x50"|"60x62"|"75x75"|"110x110"|"140x140"|"150x150"|"160x100"|"160x600"|"250x250"|"256x144"|"300x250"|"304x166"|"384x216"|"396x216"|"420x420"|"480x270"|"512x512"|"576x324"|"700x700"|"728x90"|"768x432"|"1200x80"
export type AssetsData = {
  [assetId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawAssetsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}

// GET /v1/assets-thumbnail-3d
export type Asset3dData = {
  targetId: number,
  state: "Completed" | "Pending" | "Error",
  imageUrl: string
}
export type RawAsset3dData = Asset3dData

// GET /v1/asset-thumbnail-animated
export type AssetAnimatedData = {
  targetId: number,
  state: "Completed" | "Pending" | "Error",
  imageUrl: string
}
export type RawAssetAnimatedData = AssetAnimatedData
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ BADGES ] ////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/badges/icons
export type BadgesData = {
  [badgeId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawBadgesData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ BUNDLES ] ///////////////////////////////////////////////////////////////////////////////////////////////////////
export type BundleSize = "150x150"|"420x420"

// GET /v1/bundles/thumbnails
export type BundlesData = {
  [bundleId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawBundlesData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ DEVELOPER PRODUCTS ] ////////////////////////////////////////////////////////////////////////////////////////////
export type DeveloperProductSize = "150x150"|"420x420"

// GET /v1/developer-products/icons
export type DeveloperProductsData = {
  [developerProductId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawDeveloperProductsData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ GAME PASSES ] ///////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/game-passes
export type GamePassesData = {
  [gamePassId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawGamePassesData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ GAMES ] /////////////////////////////////////////////////////////////////////////////////////////////////////////
export type GameThumbnailSize = "256x144" | "384x216" | "480x270" | "576x324" | "768x432"

// GET /v1/games/{universeId}/thumbnails
export type GameFromThumbnailIdsData = {
  [gameThumbnailId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawGameFromThumbnailIdsData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}

// GET /v1/games/icons
export type GamesIconSize = "50x50" | "128x128" | "150x150" | "256x256" | "512x512"
export type GamesIconsData = {
  [gameIconId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawGamesIconsData = {
  data: {
    targetId: number,
    state:  "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}

// GET /v1/games/multiget/thumbnails
export type GamesData = {
  [universeId: number]: {
    error: unknown,
    thumbnails: {
      targetId: number,
      state: "Completed" | "Pending" | "Error",
      imageUrl: string
    }[]
  }
}
export type RawGamesData = {
  data: {
    universeId: number,
    error: unknown,
    thumbnails: {
      targetId: number,
      state:  "Completed" | "Pending" | "Error",
      imageUrl: string
    }[]
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ GROUP EMBLEM ] //////////////////////////////////////////////////////////////////////////////////////////////////
// /v1/groups/icons
export type GroupEmblemSize = "150x150"|"420x420"
export type GroupsEmblemsData = {
  [groupId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawGroupsEmblemsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ METADATA ] //////////////////////////////////////////////////////////////////////////////////////////////////////
// /v1/metadata
export type MetadataData = {
  isWebappUseCacheEnabled: boolean,
  webappCacheExpirationTimspan: string
}
export type RawMetadataData = MetadataData
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ PLACES ] ////////////////////////////////////////////////////////////////////////////////////////////////////////
// /v1/places/gameicons
export type PlaceThumbnailSize = "50x50"|"128x128"|"150x150"|"256x256"|"512x512"
export type PlacesIconsData = {
  [placeId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawPlacesIconsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ AVATAR ] ////////////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/users/avatar
export type AvatarFullSize = "30x30"|"48x48"|"60x60"|"75x75"|"100x100"|"110x110"|"140x140"|"150x150"|"180x180"|"250x250"|"352x352"|"420x420"|"720x720"
export type AvatarFullData = {
  [userId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawAvatarFullData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}

// GET /v1/users/avatar-3d
export type Avatar3dData = {
  targetId: number
  state: "Completed" | "Pending" | "Error",
  imageUrl: string
}
export type RawAvatar3dData = Avatar3dData

// GET /v1/users/avatar-bust
export type AvatarBustSize = "48x48"|"50x50"|"60x60"|"75x75"|"100x100"|"150x150"|"180x180"|"352x352"|"420x420"
export type AvatarBustData = {
  [userId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawAvatarBustData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}

// GET /v1/users/avatar-headshot
export type AvatarHeadshotSize = "48x48"|"50x50"|"60x60"|"75x75"|"100x100"|"110x110"|"150x150"|"180x180"|"352x352"|"420x420"|"720x720"
export type AvatarHeadshotData = {
  [userId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawAvatarHeadshotData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// [ OUTFITS ] ///////////////////////////////////////////////////////////////////////////////////////////////////////
// GET /v1/users/outfit-3d
export type Outfit3dData = {
  targetId: number
  state: "Completed" | "Pending" | "Error",
  imageUrl: string
}
export type RawOutfit3dData = Outfit3dData

// GET /v1/users/outfits
export type OutfitSize = "150x150"|"420x420"
export type OutfitsData = {
  [outfitId: number]: {
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }
}
export type RawOutfitsData = {
  data: {
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [ BATCH ] /////////////////////////////////////////////////////////////////////////////////////////////////////////
// POST /v1/batch
type BatchType = "Avatar"|"AvatarHeadShot"|"GameIcon"|"BadgeIcon"|"GameThumbnail"|"GamePass"|"Asset"|"BundleThumbnail"|"Outfit"|"GroupIcon"|"DeveloperProduct"|"AutoGeneratedAsset"|"AvatarBust"|"PlaceIcon"|"AutoGeneratedGameIcon"|"ForceAutoGeneratedGameIcon"
export type BatchRequest = {
  requestId?: string,
  targetId: number,
  token?: string,
  alias?: string,
  type: BatchType,
  size: string,
  format: string,
  isCircular: boolean
}
export type BatchData = {
  [key in BatchType]: {
    [targetId: number]: {
      requestId: string | null,
      errorCode: number,
      errorMessage: string | "",
      state: "Completed" | "Pending" | "Error",
      imageUrl: string | null
    }
  }
}
export type RawBatchData = {
  data: {
    requestId: string | null,
    errorCode: number,
    errorMessage: string | "",
    targetId: number,
    state: "Completed" | "Pending" | "Error",
    imageUrl: string | null
  }[]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////