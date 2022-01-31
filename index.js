$(document).ready(() => {
    console.log("masuk")
    showForm()
  
    function showPageTwo() {
      $(".review-page2").show()
      $(".review-page").hide()
      $(".review-page3").hide()
      $(".center").hide()
    }

    function showForm() {
      $(".center").show()
      $(".review-page2").hide()
      $(".review-page").hide()
      $(".review-page3").hide()
    }
  
    function showPage() {
      $(".center").hide()
      $(".review-page2").hide()
      $(".review-page").show()
      $(".review-page3").hide()
    }

    function showPageThree() {
      $(".center").hide()
      $(".review-page2").hide()
      $(".review-page").hide()
      $(".review-page3").show()
      $(".example_append").show()
    }
  
    // $(".mode").on("click", (e) => {
    //   console.log("HELLO")
    //   $("body").toggleClass("dark")
    // })
    
    $(".btn").on("click", () => {
        showPage()
      })

    $(".next-button").on("click", () => {
      showPageTwo()
    })
  
    $(".preview-button").on("click", () => {
      showPage()
    })
    
    $(".next-button2").on("click", () => {
        showPageThree()
      })
    
    $("p").hover(function(){
        $(this).css("background-color", "red")
    }, function(){
        $(this).css("background-color", "")
    })
    
    $(".append-btn").on("click", () => {
        example_append()
      })
    
    function example_append() {
        $('#test-append').append($('#example-textarea').val());
    }
    $('.example-default-value').each(function() {
        var default_value = this.value;
        $(this).focus(function() {
            if(this.value == default_value) {
                this.value = '';
            }
        });
        // $(this).blur(function() {
        //     if(this.value == '') {
        //         this.value = default_value;
        //     }
        // });
    });


})