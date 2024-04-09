 <!-- Optional JavaScript -->
 <!-- jQuery first, then Popper.js, then Bootstrap JS -->
<!-- AddToAny BEGIN -->
<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
</div>
<script async src="https://static.addtoany.com/menu/page.js"></script>
<!-- AddToAny END -->
 <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E="
     crossorigin="anonymous"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"
     integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw=="
     crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
     integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
 </script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
     integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
 </script>
 <!-- font awsome  -->
 <script src="https://kit.fontawesome.com/7771cc6153.js" crossorigin="anonymous"></script>
 <!-- slick slider js  -->
 <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
 <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
     integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
     crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <!-- owl cdns  -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
     integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
     crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <!-- custom js  -->
 <script src="{{ asset('js/app.js') }}"></script>
 <!--buttter js -->
 <!-- fancybox  -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"
     integrity="sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA=="
     crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 <script src="{{ asset('js/butter.js') }}"></script>
<script>
//      butter.init({
//          cancelOnTouch: true
//      });
</script>
 <!-- data aos js  -->
 <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

 <script>
     AOS.init();
 </script>

 <script>
     function editableContent() {
         
         $('.editable').each(function() {
             $(this).append(
                 '<div class="editable-wrapper"><a href="javascript:" class="edit" title="Edit" onclick="editContent(this)"><i class="far fa-edit"></i></a><a href="javascript:" class="update" title="Update" onclick="updateContent(this)"><i class="far fa-share-square"></i></a></div>'
                 );
         });
     }

     function editContent(a) {
         $(a).closest('.editable').attr('contenteditable', true);;
         $(a).closest('.editable-wrapper').attr('contenteditable', false);
         $(a).closest('.editable').focus();
     }

     function updateContent(a) {
         var editableDiv = $(a).closest('.editable');
         var id = $(editableDiv).attr('data-id');
         var keyword = $(editableDiv).attr('data-name');
         var htmlcontent = $(editableDiv).clone(true);
         $(htmlcontent).find('.editable-wrapper').remove();
         sendData(id, keyword, $(htmlcontent).html());
     }

     function sendData(id, keyword, htmlContent) {
         console.log(id);
         console.log(keyword);
         console.log(htmlContent);
         $.ajax({
             url: "update-content",
             type: "POST",
             data: {
                 "_token": "{{ csrf_token() }}",
                 id: id,
                 keyword: keyword,
                 htmlContent: htmlContent,
             },
             success: function(response) {
                 if (response.status) {
                     toastr.success(response.message);
                 } else {
                     toastr.success(response.error);
                 }
             },
         });
     }
 </script>

 <script type="text/javascript">
     $('#newForm').on('submit', function(e) {
         $('#newsresult').html('');
         e.preventDefault();

       

         $.ajax({
             url: "newsletter-submit",
             type: "POST",
             data: {
                 "_token": "{{ csrf_token() }}",
                 newsletter_email:  $('#newemail').val(),
                 newsletter_name:  $('#newname').val()
             },
             success: function(response) {
                 if (response.status) {
                     toastr.success(response.message)
                 } else {
                     toastr.error(response.message)
                 }
             },
         });
     });
 </script>


 <script type="text/javascript">
 function validateForm(e){
     let validate = true
      $(e).find('.form-control').each(function(){
          if($(this).prop('required')){
            if( !$(this).val() ) {
                console.log('here')
              validate = false
            }
          }
    });
    return validate
    
 }

     $('.contactform').on('submit', function(e) {
         
         e.preventDefault();
         if(validateForm(this)){
             
             $.ajax({
                 url: "{{ route('contactUsSubmit') }}",
                 type: "POST",
                 data: $(this).serialize(),
    
                 success: function(response) {
                     if (response.status) {
                         $(this).trigger("reset");
                         toastr.success(response.message)
                     } else {
                         toastr.error(response.message)
                     }
                     4
                 },
             });
         }
         else{
             toastr.error('Please fill all fields')
         }
      
     });
     
     $(window).load(function(){
         
         $('span.a2a_svg.a2a_s__default.a2a_s_a2a').html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" style="width: 50%;height: 60%;" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/> </svg> <span class="text">Share</span>`)
         $('span.a2a_svg.a2a_s__default.a2a_s_a2a').css('background-color','black')
         $('span.a2a_svg.a2a_s__default.a2a_s_a2a').css('width','50px')
         $('a.a2a_dd').slideDown()
     })
 </script>

 @if (!Auth::guest())
     @if (Auth::user()->isAdmin())
         <script>
             editableContent();
         </script>
     @endif
 @endif

 @if (Session::has('message'))
     <script type="text/javascript">
         toastr.success("{{ Session::get('message') }}");
     </script>
 @endif
