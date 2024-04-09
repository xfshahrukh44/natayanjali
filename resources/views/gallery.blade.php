@extends('layouts.main')

@section('content')
    <section class="banner" id="photo">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="Elephant-headings ml2">Gallery</h1>
                  
                </div>
            </div>
        </div>
    </section>

    <!-- section-4 html end  -->
    <section class="GallerySec bg-gradient pt-0">
        <div class="container">
            <div class="row justify-content-center">
                @foreach ($gallery as $item)
                    <div class="col-lg-4 col-md-4 col-4 p-0">
                        <a data-fancybox="gallery" href="{{ asset($item->image) }}">
                            <div class=" img-parent">
                                <img src="{{ asset($item->image) }}" alt="" class="img-fluid">
                            </div>
                        </a>
                    </div>
                @endforeach

            </div>
        </div>
    </section>
    @if($videos->isNotEmpty())
    {!! $page->content !!}
    <!-- section-4 html end  -->
    <section class="Video-Sec bg-gradient pt-0" id="video">
        <div class="container">
            <div class="row align-items-center">
                @foreach ($videos as $item)
                    <div class="col-lg-6 pb-4">
                        {!! $item->video !!}
                    </div>
                @endforeach

            </div>
        </div>
    </section>
    @endif
    {{--<section class="Video-Sec bg-gradient pt-0" id="video" >
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="Elephant-headings ml2">Tutorial</h1>
                    <div id="myDiv"></div>
                    <ul id="playlists" style="display:none;">
                        @foreach ($playlist as $item)
                            <li data-source="playlist1" data-playlist-name="{{ $item->name }}"
                                data-thumbnail-path="{{ asset($item->image) }}">
                                <p class="minimalDarkCategoriesTitle"><span class="minimialDarkBold">Title:
                                    </span>{{ $item->name }}</p>
                                <p class="minimalDarkCategoriesDescription">{!! $item->descrption !!}</p>
                            </li>
                        @endforeach



                    </ul>
                    @foreach ($playlist as $item)
                        <ul id="playlist1" style="display:none;">
                            @foreach ($item->videos as $video)
                                <li data-thumb-source="{{ asset($video->image) }}"
                                    data-video-source="[{source:'{{ asset($video->video) }}', label:'small version'}, {source:'{{ asset($video->video) }}', label:'hd720'},{source:'{{ asset($video->video) }}', label:'hd1080'}]"
                                    data-start-at-video="2" data-poster-source="{{ asset($video->image) }}"
                                    data-subtitle-soruce="[{source:'content/subtitles/english_subtitle.vtt', label:'English'}, {source:'content/subtitles/romanian_subtitle.vtt', label:'Romanian'},{source:'content/subtitles/spanish_subtitle.vtt', label:'Spanish'}]"
                                    data-start-at-subtitle="1" data-downloadable="yes">
                                    <div data-video-short-description="">
                                        <div>
                                            <p class="fwduvp-thumbnail-title text-white">{{ $video->name }}</p>

                                        </div>
                                    </div>
                                </li>
                            @endforeach

                        </ul>
                    @endforeach


                </div>
            </div>
        </div>
    </section>--}}
@endsection
@section('css')
    <style>
        .img-parent {
            width: 100%;
            height: 500px;
            padding: 1rem;
        }

        .img-parent img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            object-position: top;
        }
    </style>
@endsection

@section('js')
<script type='text/javascript' src="{{ asset('js/jQuery.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/FWDSI.js') }}"></script>

<script type="text/javascript" src="{{ asset('js/FWDUVPlayer.js') }}"></script>
<script>
    // var page = "main";
    // FWDUVPUtils.onReady(function() {

    //     new FWDUVPlayer({

    //         //main settings
    //         instanceName: "player1",
    //         parentId: "myDiv",
    //         playlistsId: "playlists",
    //         mainFolderPath: "{{ asset('content') }}",
    //         skinPath: "hex_dark",
    //         displayType: "responsive",
    //         initializeOnlyWhenVisible: "no",
    //         useVectorIcons: "no",
    //         fillEntireVideoScreen: "no",
    //         goFullScreenOnButtonPlay: "no",
    //         playsinline: "yes",
    //         useHEXColorsForSkin: "no",
    //         normalHEXButtonsColor: "#FF0000",
    //         selectedHEXButtonsColor: "#000000",
    //         googleAnalyticsTrackingCode: "",
    //         useResumeOnPlay: "no",
    //         useDeepLinking: "yes",
    //         addKeyboardSupport: "yes",
    //         showPreloader: "yes",
    //         preloaderBackgroundColor: "#000000",
    //         preloaderFillColor: "#FFFFFF",
    //         autoScale: "yes",
    //         showButtonsToolTip: "yes",
    //         stopVideoWhenPlayComplete: "no",
    //         playAfterVideoStop: "no",
    //         autoPlay: "no",
    //         loop: "no",
    //         shuffle: "no",
    //         showErrorInfo: "yes",
    //         maxWidth: 980,
    //         maxHeight: 552,
    //         buttonsToolTipHideDelay: 1.5,
    //         volume: .8,
    //         backgroundColor: "#000000",
    //         videoBackgroundColor: "#000000",
    //         posterBackgroundColor: "#000000",
    //         buttonsToolTipFontColor: "#5a5a5a",
    //         //logo settings
    //         showLogo: "yes",
    //         hideLogoWithController: "yes",
    //         logoPosition: "topRight",
    //         logoLink: "http://www.webdesign-flash.ro/",
    //         logoMargins: 5,
    //         //playlists/categories settings
    //         showPlaylistsSearchInput: "yes",
    //         usePlaylistsSelectBox: "yes",
    //         showPlaylistsButtonAndPlaylists: "yes",
    //         showPlaylistsByDefault: "no",
    //         thumbnailSelectedType: "opacity",
    //         startAtPlaylist: 0,
    //         buttonsMargins: 0,
    //         thumbnailMaxWidth: 350,
    //         thumbnailMaxHeight: 350,
    //         horizontalSpaceBetweenThumbnails: 40,
    //         verticalSpaceBetweenThumbnails: 40,
    //         inputBackgroundColor: "#333333",
    //         inputColor: "#999999",
    //         //playlist settings
    //         showPlaylistButtonAndPlaylist: "yes",
    //         playlistPosition: "right",
    //         showPlaylistByDefault: "yes",
    //         showPlaylistName: "yes",
    //         showSearchInput: "yes",
    //         showLoopButton: "yes",
    //         showShuffleButton: "yes",
    //         showPlaylistOnFullScreen: "no",
    //         showNextAndPrevButtons: "yes",
    //         showThumbnail: "yes",
    //         forceDisableDownloadButtonForFolder: "yes",
    //         addMouseWheelSupport: "yes",
    //         startAtRandomVideo: "no",
    //         stopAfterLastVideoHasPlayed: "no",
    //         randomizePlaylist: 'no',
    //         folderVideoLabel: "VIDEO ",
    //         playlistRightWidth: 310,
    //         playlistBottomHeight: 599,
    //         startAtVideo: 0,
    //         maxPlaylistItems: 50,
    //         thumbnailWidth: 70,
    //         thumbnailHeight: 70,
    //         spaceBetweenControllerAndPlaylist: 2,
    //         spaceBetweenThumbnails: 2,
    //         scrollbarOffestWidth: 8,
    //         scollbarSpeedSensitivity: .5,
    //         playlistBackgroundColor: "#000000",
    //         playlistNameColor: "#FFFFFF",
    //         thumbnailNormalBackgroundColor: "#1b1b1b",
    //         thumbnailHoverBackgroundColor: "#313131",
    //         thumbnailDisabledBackgroundColor: "#272727",
    //         searchInputBackgroundColor: "#000000",
    //         searchInputColor: "#999999",
    //         youtubeAndFolderVideoTitleColor: "#FFFFFF",
    //         folderAudioSecondTitleColor: "#999999",
    //         youtubeOwnerColor: "#888888",
    //         youtubeDescriptionColor: "#888888",
    //         mainSelectorBackgroundSelectedColor: "#FFFFFF",
    //         mainSelectorTextNormalColor: "#FFFFFF",
    //         mainSelectorTextSelectedColor: "#000000",
    //         mainButtonBackgroundNormalColor: "#212021",
    //         mainButtonBackgroundSelectedColor: "#FFFFFF",
    //         mainButtonTextNormalColor: "#FFFFFF",
    //         mainButtonTextSelectedColor: "#000000",
    //         //controller settings
    //         showController: "yes",
    //         showControllerWhenVideoIsStopped: "yes",
    //         showNextAndPrevButtonsInController: "no",
    //         showRewindButton: "yes",
    //         showPlaybackRateButton: "yes",
    //         showVolumeButton: "yes",
    //         showTime: "yes",
    //         showQualityButton: "yes",
    //         showInfoButton: "yes",
    //         showDownloadButton: "yes",
    //         showFacebookButton: "yes",
    //         showEmbedButton: "yes",
    //         showChromecastButton: "no",
    //         showFullScreenButton: "yes",
    //         disableVideoScrubber: "no",
    //         showScrubberWhenControllerIsHidden: "yes",
    //         showDefaultControllerForVimeo: "no",
    //         repeatBackground: "yes",
    //         controllerHeight: 37,
    //         controllerHideDelay: 3,
    //         startSpaceBetweenButtons: 7,
    //         spaceBetweenButtons: 8,
    //         scrubbersOffsetWidth: 2,
    //         mainScrubberOffestTop: 14,
    //         timeOffsetLeftWidth: 5,
    //         timeOffsetRightWidth: 3,
    //         timeOffsetTop: 0,
    //         volumeScrubberHeight: 80,
    //         volumeScrubberOfsetHeight: 12,
    //         timeColor: "#888888",
    //         youtubeQualityButtonNormalColor: "#888888",
    //         youtubeQualityButtonSelectedColor: "#FFFFFF",
    //         scrubbersToolTipLabelBackgroundColor: "#FFFFFF",
    //         scrubbersToolTipLabelFontColor: "#5a5a5a",
    //         //advertisement on pause window
    //         aopwTitle: "Advertisement",
    //         aopwWidth: 400,
    //         aopwHeight: 240,
    //         aopwBorderSize: 6,
    //         aopwTitleColor: "#FFFFFF",
    //         //subtitle
    //         subtitlesOffLabel: "Subtitle off",
    //         //popup add windows
    //         showPopupAdsCloseButton: "yes",
    //         //embed window and info window
    //         embedAndInfoWindowCloseButtonMargins: 0,
    //         borderColor: "#333333",
    //         mainLabelsColor: "#FFFFFF",
    //         secondaryLabelsColor: "#a1a1a1",
    //         shareAndEmbedTextColor: "#5a5a5a",
    //         inputBackgroundColor: "#000000",
    //         inputColor: "#FFFFFF",
    //         //audio visualizer
    //         audioVisualizerLinesColor: "#0099FF",
    //         audioVisualizerCircleColor: "#FFFFFF",
    //         //lightbox settings
    //         lightBoxBackgroundOpacity: .6,
    //         lightBoxBackgroundColor: "#000000",
    //         //sticky on scroll
    //         stickyOnScroll: "no",
    //         stickyOnScrollShowOpener: "yes",
    //         stickyOnScrollWidth: "700",
    //         stickyOnScrollHeight: "394",
    //         //sticky display settings
    //         showOpener: "yes",
    //         showOpenerPlayPauseButton: "yes",
    //         verticalPosition: "bottom",
    //         horizontalPosition: "center",
    //         showPlayerByDefault: "yes",
    //         animatePlayer: "yes",
    //         openerAlignment: "right",
    //         mainBackgroundImagePath: "{{ asset('content/hex_dark/main-background.png') }}",
    //         openerEqulizerOffsetTop: -1,
    //         openerEqulizerOffsetLeft: 3,
    //         offsetX: 0,
    //         offsetY: 0,
    //         //loggin
    //         isLoggedIn: "no",
    //         playVideoOnlyWhenLoggedIn: "yes",
    //         loggedInMessage: "Please login to view this video.",
    //         //playback rate / speed
    //         defaultPlaybackRate: 1, //0.25, 0.5, 1, 1.25, 1.2, 2
    //         //cuepoints
    //         executeCuepointsOnlyOnce: "no",
    //         //ads
    //         openNewPageAtTheEndOfTheAds: "no",
    //         playAdsOnlyOnce: "no",
    //         adsButtonsPosition: "left",
    //         skipToVideoText: "You can skip to video in: ",
    //         skipToVideoButtonText: "Skip Ad",
    //         adsTextNormalColor: "#888888",
    //         adsTextSelectedColor: "#FFFFFF",
    //         adsBorderNormalColor: "#666666",
    //         adsBorderSelectedColor: "#FFFFFF",
    //         //a to b loop
    //         useAToB: "yes",
    //         atbTimeBackgroundColor: "transparent",
    //         atbTimeTextColorNormal: "#888888",
    //         atbTimeTextColorSelected: "#000000",
    //         atbButtonTextNormalColor: "#FFFFFF",
    //         atbButtonTextSelectedColor: "#FFFFFF",
    //         atbButtonBackgroundNormalColor: "#888888",
    //         atbButtonBackgroundSelectedColor: "#000000",
    //         // context menu
    //         showContextmenu: 'yes',
    //         showScriptDeveloper: "no",
    //         contextMenuBackgroundColor: "#1f1f1f",
    //         contextMenuBorderColor: "#1f1f1f",
    //         contextMenuSpacerColor: "#333",
    //         contextMenuItemNormalColor: "#888888",
    //         contextMenuItemSelectedColor: "#FFFFFF",
    //         contextMenuItemDisabledColor: "#444"
    //     });
    // });
</script>
    <script type="text/javascript"></script>
@endsection
