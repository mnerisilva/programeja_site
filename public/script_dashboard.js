$.ajax({
    // inicio do código ajax listagem inicial - cadastro de vídeo avulso
    type: "POST",
    url: "lista_users.php",
    dataType: "json",
    encode: true,
  }).done(function (data) {
    console.log(data);
    const _tbody =  document.querySelector('table tbody');

    for (userItem of data){
        console.log(userItem);
        const _tr = document.createElement('tr');
        const _td1 = document.createElement('td');
        const _td2 = document.createElement('td');
        const _td3 = document.createElement('td');
        const _nodeText1 = document.createTextNode(userItem.user_id);
        const _nodeText2 = document.createTextNode(userItem.user_name);
        _td1.appendChild(_nodeText1);
        _td2.appendChild(_nodeText2);
        _td3.innerHTML = `<i class="fa-solid fa-gear user-course-manager" data-bs-toggle="modal" data-bs-target="#exampleModal" data-userId="${userItem.user_id}" data-userName="${userItem.user_name}"></i>&nbsp;<i class="fa-solid fa-user-gear user-manager"></i>`;
        _tr.appendChild(_td1);
        _tr.appendChild(_td2);
        _tr.appendChild(_td3);
        _tbody.appendChild(_tr);
    }

    const _userCourseManager = document.querySelectorAll('.user-course-manager');
    const _userManager = document.querySelectorAll('.user-manager');
    const _modalUserId = document.querySelector('.modal-user-id');
    const _modalUserName = document.querySelector('.modal-user-name');
    console.log(_userCourseManager);
    console.log(_userManager);

    _userCourseManager.forEach(function(item){
        item.addEventListener('click', function(e){
            console.log(e.target.dataset.userid);
            _modalUserId.innerHTML = `${e.target.dataset.userid} - `;
            _modalUserName.innerHTML = e.target.dataset.username;
        });
    })

    _userManager.forEach(function(item){
        item.addEventListener('click', function(e){
            console.log('clicou');
            _modalUserId.innerHTML = `${e.target.dataset.userid} - `;
            _modalUserName.innerHTML = e.target.dataset.username;
        });
    })

  });