

    /**
     * Create scene, camera, renderer.
     */
    var setUp = function() {
        var result = {};

        // create a scene, that will hold all our elements such
        // as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        // a frustrum is a pyramid with a square base the apex cut off
        // 45 is vertical field of view of the frustrum
        // window.innerWidth/window.innerHeight is aspect ratio of the frustrum
        // 0.1 is the distance to the near plane of the frustrum
        // 1000 is the distance to the far plane of the frustrum
        var camera = new THREE.PerspectiveCamera(45,
            window.innerWidth / window.innerHeight, 0.1, 1000);

        var orbitControls = new THREE.OrbitControls( camera );
        orbitControls.autoRotate = false;
        var clock = new THREE.Clock();

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer();
        // specify the color of the background for this image
        renderer.setClearColor(new THREE.Color(0xDDFFCC));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        // specify the lengths of the 3 axes
        var axes = new THREE.AxisHelper(24);
        scene.add(axes);

        // position and point the camera to the center of the scene
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 300;
        camera.lookAt(scene.position);

        var origin = new THREE.Object3D();
        origin.position = new THREE.Vector3( 0, 0, 0 );

        result.camera = camera;
        result.clock = clock;
        result.orbitControls = orbitControls;
        result.origin = origin;
        result.renderer = renderer;
        result.scene = scene;

        return result;
    }; // setUp()


    /**
     * Give the program the means to resize the image
     * when a user resizes the window that contains
     * the image.
     *
     * @param {THREE.PerspectiveCamera} camera (could also be a different kind of camera)
     * @param {THREE.WebGLRenderer} renderer (could also be a different kind of renderer)
     */
    var makeResizable = function( camera, renderer ) {
        /**
         * Resize image when user resizes the window.
         */
        var onResize = function() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }; // onResize()

        window.addEventListener( 'resize', onResize, false );

    }; // makeResizable()

    /**
     * Add lights to the scene.
     *
     * @param {THREE.Scene} scene is a graph that contains nodes
     * that represent lights, cameras, and geometric objects.
     *
     */
    var addLights = function( scene, origin ) {
        // add spotlights for the shadows
        var directionalLight0 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight0.castShadow = true;
        directionalLight0.target = origin;
        directionalLight0.position.set( 20, 40, 80 );

        directionalLight0.shadeCameraNear = 100;
        directionalLight0.shadeCameraFar = -100;
        directionalLight0.shadeCameraLeft = -100;
        directionalLight0.shadeCameraRight = 100;
        directionalLight0.shadeCameraTop = 100;
        directionalLight0.shadeCameraBottom = -100;

        scene.add(directionalLight0);

        var directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight1.castShadow = true;
        directionalLight1.target = origin;
        directionalLight1.position.set( 20, 80, 40 );

        directionalLight1.shadeCameraNear = 100;
        directionalLight1.shadeCameraFar = -100;
        directionalLight1.shadeCameraLeft = -100;
        directionalLight1.shadeCameraRight = 100;
        directionalLight1.shadeCameraTop = 100;
        directionalLight1.shadeCameraBottom = -100;

        scene.add(directionalLight1);

        var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight2.castShadow = true;
        directionalLight2.target = origin;
        directionalLight2.position.set( 80, 40, 60 );

        directionalLight2.shadeCameraNear = 100;
        directionalLight2.shadeCameraFar = -100;
        directionalLight2.shadeCameraLeft = -100;
        directionalLight2.shadeCameraRight = 100;
        directionalLight2.shadeCameraTop = 100;
        directionalLight2.shadeCameraBottom = -100;

        scene.add(directionalLight2);
    }; // addLights()

    /**
     *  This function will create all of the geometry for a Truncated Cuboctahedron
     *  It creates 53 points, adds them to a geometry and returns the geometry
     *  @return geometry a THREE.Geometry object
     **/
     function createGeometry()
     {
        /** FRONT OF OCTAGON **/
        var center = new THREE.Vector3(0, 0, 3);
        // front side octagon
        var v1 = new THREE.Vector3( -1, 2, 3 );
        var v2 = new THREE.Vector3( -2, 1, 3 );
        var v3 = new THREE.Vector3( -2, -1, 3 );
        var v4 = new THREE.Vector3( -1, -2, 3 );
        var v5 = new THREE.Vector3( 1, -2, 3 );
        var v6 = new THREE.Vector3( 2, -1, 3 );
        var v7 = new THREE.Vector3( 2, 1, 3 );
        var v8 = new THREE.Vector3( 1, 2, 3 );
        //top square (left)
        var v9 = new THREE.Vector3( -1, 3, 2 );
        //left square
        var v10 = new THREE.Vector3( -3, 1, 2 );
        var v11 = new THREE.Vector3( -3, -1, 2 );
        //bottom square
        var v12 = new THREE.Vector3( -1, -3, 2 );
        var v13 = new THREE.Vector3( 1, -3, 2 );
        //right square
        var v14 = new THREE.Vector3( 3, -1, 2 );
        var v15 = new THREE.Vector3( 3, 1, 2 );
        //top square (right)
        var v16 = new THREE.Vector3( 1, 3, 2 );
        //fron top left hexagon
        var v17 = new THREE.Vector3( -2, 3, 1 );
        var v18 = new THREE.Vector3( -3, 2, 1 );
        //front bottom left hexagon
        var v19 = new THREE.Vector3( -3, -2, 1 );
        var v20 = new THREE.Vector3( -2, -3, 1 );
        //front bottom right hexagon
        var v21 = new THREE.Vector3( 2, -3, 1 );
        var v22 = new THREE.Vector3( 3, -2, 1 );
        //front top right hexagon
        var v23 = new THREE.Vector3( 3, 2, 1 );
        var v24 = new THREE.Vector3( 2, 3, 1 );
        /** BACK OF OCTAGON **/
        var backCenter = new THREE.Vector3(0, 0, -3);
        // back side octagon
        var v26 = new THREE.Vector3( -1, 2, -3 );
        var v27 = new THREE.Vector3( -2, 1, -3 );
        var v28 = new THREE.Vector3( -2, -1, -3 );
        var v29 = new THREE.Vector3( -1, -2, -3 );
        var v30 = new THREE.Vector3( 1, -2, -3 );
        var v31 = new THREE.Vector3( 2, -1, -3 );
        var v32 = new THREE.Vector3( 2, 1, -3 );
        var v33 = new THREE.Vector3( 1, 2, -3 );
        //top square (left)
        var v34 = new THREE.Vector3( -1, 3, -2 );
        //left square
        var v35 = new THREE.Vector3( -3, 1, -2 );
        var v36 = new THREE.Vector3( -3, -1, -2 );
        //bottom square
        var v37 = new THREE.Vector3( -1, -3, -2 );
        var v38 = new THREE.Vector3( 1, -3, -2 );
        //right square
        var v39 = new THREE.Vector3( 3, -1, -2 );
        var v40 = new THREE.Vector3( 3, 1, -2 );
        //top square (right)
        var v41 = new THREE.Vector3( 1, 3, -2 );
        //fron top left hexagon
        var v42 = new THREE.Vector3( -2, 3, -1 );
        var v43 = new THREE.Vector3( -3, 2, -1 );
        //front bottom left hexagon
        var v44 = new THREE.Vector3( -3, -2, -1 );
        var v45 = new THREE.Vector3( -2, -3, -1 );
        //front bottom right hexagon
        var v46 = new THREE.Vector3( 2, -3, -1 );
        var v47 = new THREE.Vector3( 3, -2, -1 );
        //front top right hexagon
        var v48 = new THREE.Vector3( 3, 2, -1 );
        var v49 = new THREE.Vector3( 2, 3, -1 );
        // Top center mid points
        var topCenter = new THREE.Vector3( 0, 3, 0 );
        // Bottom center mid points
        var btmCenter = new THREE.Vector3( 0, -3, 0 );
        // Left Center mid points
        var lftCenter = new THREE.Vector3( -3, 0, 0 );
        // Right center mid points
        var rgtCenter = new THREE.Vector3( 3, 0, 0 );

        //Create our geometry object
        var geometry = new THREE.Geometry();
        /** front side **/
        geometry.vertices.push( center );
        geometry.vertices[0].mid = true;
        geometry.vertices.push( v1 );
        geometry.vertices.push( v2 );
        geometry.vertices.push( v3 );
        geometry.vertices.push( v4 );
        geometry.vertices.push( v5 );
        geometry.vertices.push( v6 );
        geometry.vertices.push( v7 );
        geometry.vertices.push( v8 );
        geometry.vertices.push( v9 );
        geometry.vertices.push( v10 );
        geometry.vertices.push( v11 );
        geometry.vertices.push( v12 );
        geometry.vertices.push( v13 );
        geometry.vertices.push( v14 );
        geometry.vertices.push( v15 );
        geometry.vertices.push( v16 );
        geometry.vertices.push( v17 );
        geometry.vertices.push( v18 );
        geometry.vertices.push( v19 );
        geometry.vertices.push( v20 );
        geometry.vertices.push( v21 );
        geometry.vertices.push( v22 );
        geometry.vertices.push( v23 );
        geometry.vertices.push( v24 );
        geometry.vertices.push( backCenter );
        geometry.vertices[25].mid = true;
        geometry.vertices.push( v26 );
        geometry.vertices.push( v27 );
        geometry.vertices.push( v28 );
        geometry.vertices.push( v29 );
        geometry.vertices.push( v30 );
        geometry.vertices.push( v31 );
        geometry.vertices.push( v32 );
        geometry.vertices.push( v33 );
        geometry.vertices.push( v34 );
        geometry.vertices.push( v35 );
        geometry.vertices.push( v36 );
        geometry.vertices.push( v37 );
        geometry.vertices.push( v38 );
        geometry.vertices.push( v39 );
        geometry.vertices.push( v40 );
        geometry.vertices.push( v41 );
        geometry.vertices.push( v42 );
        geometry.vertices.push( v43 );
        geometry.vertices.push( v44 );
        geometry.vertices.push( v45 );
        geometry.vertices.push( v46 );
        geometry.vertices.push( v47 );
        geometry.vertices.push( v48 );
        geometry.vertices.push( v49 );
        geometry.vertices.push( topCenter );
        geometry.vertices[50].mid = true;
        geometry.vertices.push( btmCenter );
        geometry.vertices[51].mid = true;
        geometry.vertices.push( lftCenter );
        geometry.vertices[52].mid = true;
        geometry.vertices.push( rgtCenter );
        geometry.vertices[53].mid = true;

        return geometry;
      }

    /**
     * Adds spheres to the vertexs, and adds them to the scene
     * Does NOT print any vertices that have a "mid" attribute that is true
     * @param geometry { THREE.Geometry } a THREE.Geometry object.
     * @param scene { THREE.Scene } a THREE.Scene object
     * @param scale a scale factor for the shape
     **/
    function vertexSpheres( geometry, scene, scale )
    {
        var vertSpheres = [];
        var sGeometry = new THREE.SphereGeometry( 1, 32, 32 );
        var sMaterial = new THREE.MeshBasicMaterial( {color: 0x695959} );
        for( var i = 0; i < geometry.vertices.length; i++)
        {
          if( geometry.vertices[i].mid != true)
          {
          var sphere = new THREE.Mesh( sGeometry, sMaterial );
          sphere.position.x = geometry.vertices[i].x * scale;
          sphere.position.y = geometry.vertices[i].y * scale;
          sphere.position.z = geometry.vertices[i].z * scale;
          vertSpheres.push( sphere );
          scene.add( sphere );
          }
        }
    }

    /**
     * Draws a truncated cuboctahedron to the scene
     * @param geometry { THREE.Geometry } a THREE.Geometry object
     * @param scene { THREE.Scene } a THREE.Scene object that the shape will be added to
     * @param scale a scale factor for the shape
     **/
    function drawTruncatedCuboctahedron( geometry, scene, scale )
    {
        /** Front Side **/
        //front side octagon
        geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
        geometry.faces.push( new THREE.Face3( 0, 2, 3 ) );
        geometry.faces.push( new THREE.Face3( 0, 3, 4 ) );
        geometry.faces.push( new THREE.Face3( 0, 4, 5 ) );
        geometry.faces.push( new THREE.Face3( 0, 5, 6 ) );
        geometry.faces.push( new THREE.Face3( 0, 6, 7 ) );
        geometry.faces.push( new THREE.Face3( 0, 7, 8 ) );
        geometry.faces.push( new THREE.Face3( 0, 8, 1 ) );
        geometry.faces[0].color = new THREE.Color( 0x44EEBB );
        geometry.faces[1].color = new THREE.Color( 0x44EEBB );
        geometry.faces[2].color = new THREE.Color( 0x44EEBB );
        geometry.faces[3].color = new THREE.Color( 0x44EEBB );
        geometry.faces[4].color = new THREE.Color( 0x44EEBB );
        geometry.faces[5].color = new THREE.Color( 0x44EEBB );
        geometry.faces[6].color = new THREE.Color( 0x44EEBB );
        geometry.faces[7].color = new THREE.Color( 0x44EEBB );


        /** front side squares **/
        // top
        geometry.faces.push( new THREE.Face3( 1, 16, 9 ) );
        geometry.faces.push( new THREE.Face3( 1, 8, 16  ) );
        geometry.faces[8].color = new THREE.Color( 0xFF1919 );
        geometry.faces[9].color = new THREE.Color( 0xFF1919 );
        // left
        geometry.faces.push( new THREE.Face3( 2, 10, 11 ) );
        geometry.faces.push( new THREE.Face3( 2, 3, 11 ) );
        geometry.faces[10].color = new THREE.Color( 0xFF1919 );
        geometry.faces[11].color = new THREE.Color( 0xFF1919 );
        // bottom
        geometry.faces.push( new THREE.Face3( 4, 12, 13 ) );
        geometry.faces.push( new THREE.Face3( 4, 5, 13 ) );
        geometry.faces[12].color = new THREE.Color( 0xFF1919 );
        geometry.faces[13].color = new THREE.Color( 0xFF1919 );
        // right
        geometry.faces.push( new THREE.Face3( 6, 7, 15 ) );
        geometry.faces.push( new THREE.Face3( 6, 14, 15 ) );
        geometry.faces[14].color = new THREE.Color( 0xFF1919 );
        geometry.faces[15].color = new THREE.Color( 0xFF1919 );


        /** Front side hexagons **/
        // top left
        geometry.faces.push( new THREE.Face3( 1, 9, 17 ) );
        geometry.faces.push( new THREE.Face3( 2, 18, 10  ) );
        geometry.faces.push( new THREE.Face3( 1, 18, 2 ) );
        geometry.faces.push( new THREE.Face3( 1, 18, 17 ) );
        geometry.faces[16].color = new THREE.Color( 0x0B58DD );
        geometry.faces[17].color = new THREE.Color( 0x0B58DD );
        geometry.faces[18].color = new THREE.Color( 0x0B58DD );
        geometry.faces[19].color = new THREE.Color( 0x0B58DD );
        // bottom left
        geometry.faces.push( new THREE.Face3( 3, 19, 11 ) );
        geometry.faces.push( new THREE.Face3( 4, 20, 12  ) );
        geometry.faces.push( new THREE.Face3( 3, 20, 4 ) );
        geometry.faces.push( new THREE.Face3( 3, 20, 19 ) );
        geometry.faces[20].color = new THREE.Color( 0x0B58DD );
        geometry.faces[21].color = new THREE.Color( 0x0B58DD );
        geometry.faces[22].color = new THREE.Color( 0x0B58DD );
        geometry.faces[23].color = new THREE.Color( 0x0B58DD );
        // bottom right
        geometry.faces.push( new THREE.Face3( 5, 21, 13 ) );
        geometry.faces.push( new THREE.Face3( 6, 22, 14 ) );
        geometry.faces.push( new THREE.Face3( 5, 22, 6  ) );
        geometry.faces.push( new THREE.Face3( 5, 22, 21 ) );
        geometry.faces[24].color = new THREE.Color( 0x0B58DD );
        geometry.faces[25].color = new THREE.Color( 0x0B58DD );
        geometry.faces[26].color = new THREE.Color( 0x0B58DD );
        geometry.faces[27].color = new THREE.Color( 0x0B58DD );
        // top right
        geometry.faces.push( new THREE.Face3( 7, 23, 15 ) );
        geometry.faces.push( new THREE.Face3( 8, 24, 16  ) );
        geometry.faces.push( new THREE.Face3( 7, 23, 24 ) );
        geometry.faces.push( new THREE.Face3( 7, 24, 8 ) );
        geometry.faces[28].color = new THREE.Color( 0x0B58DD );
        geometry.faces[29].color = new THREE.Color( 0x0B58DD );
        geometry.faces[30].color = new THREE.Color( 0x0B58DD );
        geometry.faces[31].color = new THREE.Color( 0x0B58DD );


        /** Back Side **/
        // back side hexagon
        geometry.faces.push( new THREE.Face3( 25, 26, 27 ) );
        geometry.faces.push( new THREE.Face3( 25, 27, 28 ) );
        geometry.faces.push( new THREE.Face3( 25, 28, 29 ) );
        geometry.faces.push( new THREE.Face3( 25, 29, 30 ) );
        geometry.faces.push( new THREE.Face3( 25, 30, 31 ) );
        geometry.faces.push( new THREE.Face3( 25, 31, 32 ) );
        geometry.faces.push( new THREE.Face3( 25, 32, 33 ) );
        geometry.faces.push( new THREE.Face3( 25, 33, 26 ) );
        geometry.faces[32].color = new THREE.Color( 0x44EEBB );
        geometry.faces[33].color = new THREE.Color( 0x44EEBB );
        geometry.faces[34].color = new THREE.Color( 0x44EEBB );
        geometry.faces[35].color = new THREE.Color( 0x44EEBB );
        geometry.faces[36].color = new THREE.Color( 0x44EEBB );
        geometry.faces[37].color = new THREE.Color( 0x44EEBB );
        geometry.faces[38].color = new THREE.Color( 0x44EEBB );
        geometry.faces[39].color = new THREE.Color( 0x44EEBB );


        /** back side squares **/
        // top
        geometry.faces.push( new THREE.Face3( 26, 41, 34 ) );
        geometry.faces.push( new THREE.Face3( 26, 33, 41  ) );
        geometry.faces[40].color = new THREE.Color( 0xFF1919 );
        geometry.faces[41].color = new THREE.Color( 0xFF1919 );
        // left
        geometry.faces.push( new THREE.Face3( 27, 35, 36 ) );
        geometry.faces.push( new THREE.Face3( 27, 28, 36 ) );
        geometry.faces[42].color = new THREE.Color( 0xFF1919 );
        geometry.faces[43].color = new THREE.Color( 0xFF1919 );
        // bottom
        geometry.faces.push( new THREE.Face3( 28, 37, 38 ) );
        geometry.faces.push( new THREE.Face3( 28, 30, 38 ) );
        geometry.faces[44].color = new THREE.Color( 0xFF1919 );
        geometry.faces[45].color = new THREE.Color( 0xFF1919 );
        // right
        geometry.faces.push( new THREE.Face3( 31, 32, 40 ) );
        geometry.faces.push( new THREE.Face3( 31, 39, 40 ) );
        geometry.faces[46].color = new THREE.Color( 0xFF1919 );
        geometry.faces[47].color = new THREE.Color( 0xFF1919 );

        /** back side hexagons **/
        // top left
        geometry.faces.push( new THREE.Face3( 26, 34, 42 ) );
        geometry.faces.push( new THREE.Face3( 27, 43, 35 ) );
        geometry.faces.push( new THREE.Face3( 26, 43, 27 ) );
        geometry.faces.push( new THREE.Face3( 26, 43, 42 ) );
        geometry.faces[48].color = new THREE.Color( 0x0B58DD );
        geometry.faces[49].color = new THREE.Color( 0x0B58DD );
        geometry.faces[50].color = new THREE.Color( 0x0B58DD );
        geometry.faces[51].color = new THREE.Color( 0x0B58DD );
        // bottom left
        geometry.faces.push( new THREE.Face3( 28, 44, 36 ) );
        geometry.faces.push( new THREE.Face3( 29, 45, 37 ) );
        geometry.faces.push( new THREE.Face3( 28, 45, 29 ) );
        geometry.faces.push( new THREE.Face3( 28, 45, 44 ) );
        geometry.faces[52].color = new THREE.Color( 0x0B58DD );
        geometry.faces[53].color = new THREE.Color( 0x0B58DD );
        geometry.faces[54].color = new THREE.Color( 0x0B58DD );
        geometry.faces[55].color = new THREE.Color( 0x0B58DD );
        // bottom right
        geometry.faces.push( new THREE.Face3( 30, 46, 38 ) );
        geometry.faces.push( new THREE.Face3( 31, 47, 39 ) );
        geometry.faces.push( new THREE.Face3( 30, 47, 31 ) );
        geometry.faces.push( new THREE.Face3( 30, 47, 46 ) );
        geometry.faces[56].color = new THREE.Color( 0x0B58DD );
        geometry.faces[57].color = new THREE.Color( 0x0B58DD );
        geometry.faces[58].color = new THREE.Color( 0x0B58DD );
        geometry.faces[59].color = new THREE.Color( 0x0B58DD );
        // top right
        geometry.faces.push( new THREE.Face3( 32, 48, 40 ) );
        geometry.faces.push( new THREE.Face3( 33, 49, 41 ) );
        geometry.faces.push( new THREE.Face3( 32, 48, 49 ) );
        geometry.faces.push( new THREE.Face3( 32, 49, 33 ) );
        geometry.faces[60].color = new THREE.Color( 0x0B58DD );
        geometry.faces[61].color = new THREE.Color( 0x0B58DD );
        geometry.faces[62].color = new THREE.Color( 0x0B58DD );
        geometry.faces[63].color = new THREE.Color( 0x0B58DD );

        /** Top Hexagon **/
        geometry.faces.push( new THREE.Face3( 50, 34, 42 ) );
        geometry.faces.push( new THREE.Face3( 50, 42, 17 ) );
        geometry.faces.push( new THREE.Face3( 50, 17, 9 ) );
        geometry.faces.push( new THREE.Face3( 50, 9, 16  ) );
        geometry.faces.push( new THREE.Face3( 50, 16, 24 ) );
        geometry.faces.push( new THREE.Face3( 50, 24, 49 ) );
        geometry.faces.push( new THREE.Face3( 50, 49, 41 ) );
        geometry.faces.push( new THREE.Face3( 50, 41, 34 ) );
        geometry.faces[64].color = new THREE.Color( 0x44EEBB );
        geometry.faces[65].color = new THREE.Color( 0x44EEBB );
        geometry.faces[66].color = new THREE.Color( 0x44EEBB );
        geometry.faces[67].color = new THREE.Color( 0x44EEBB );
        geometry.faces[68].color = new THREE.Color( 0x44EEBB );
        geometry.faces[69].color = new THREE.Color( 0x44EEBB );
        geometry.faces[70].color = new THREE.Color( 0x44EEBB );
        geometry.faces[71].color = new THREE.Color( 0x44EEBB );

        /** Bottom Hexagon **/
        geometry.faces.push( new THREE.Face3( 51, 12, 20 ) );
        geometry.faces.push( new THREE.Face3( 51, 20, 45 ) );
        geometry.faces.push( new THREE.Face3( 51, 45, 37 ) );
        geometry.faces.push( new THREE.Face3( 51, 37, 38 ) );
        geometry.faces.push( new THREE.Face3( 51, 38, 46 ) );
        geometry.faces.push( new THREE.Face3( 51, 46, 21 ) );
        geometry.faces.push( new THREE.Face3( 51, 21, 13 ) );
        geometry.faces.push( new THREE.Face3( 51, 13, 12 ) );
        geometry.faces[72].color = new THREE.Color( 0x44EEBB );
        geometry.faces[73].color = new THREE.Color( 0x44EEBB );
        geometry.faces[74].color = new THREE.Color( 0x44EEBB );
        geometry.faces[75].color = new THREE.Color( 0x44EEBB );
        geometry.faces[76].color = new THREE.Color( 0x44EEBB );
        geometry.faces[77].color = new THREE.Color( 0x44EEBB );
        geometry.faces[78].color = new THREE.Color( 0x44EEBB );
        geometry.faces[79].color = new THREE.Color( 0x44EEBB );

        /** Right Hexagon **/
        geometry.faces.push( new THREE.Face3( 53, 48, 40 ) );
        geometry.faces.push( new THREE.Face3( 53, 40, 39 ) );
        geometry.faces.push( new THREE.Face3( 53, 39, 47 ) );
        geometry.faces.push( new THREE.Face3( 53, 47, 22 ) );
        geometry.faces.push( new THREE.Face3( 53, 22, 14 ) );
        geometry.faces.push( new THREE.Face3( 53, 14, 15 ) );
        geometry.faces.push( new THREE.Face3( 53, 15, 23 ) );
        geometry.faces.push( new THREE.Face3( 53, 23, 48 ) );
        geometry.faces[80].color = new THREE.Color( 0x44EEBB );
        geometry.faces[81].color = new THREE.Color( 0x44EEBB );
        geometry.faces[82].color = new THREE.Color( 0x44EEBB );
        geometry.faces[83].color = new THREE.Color( 0x44EEBB );
        geometry.faces[84].color = new THREE.Color( 0x44EEBB );
        geometry.faces[85].color = new THREE.Color( 0x44EEBB );
        geometry.faces[86].color = new THREE.Color( 0x44EEBB );
        geometry.faces[87].color = new THREE.Color( 0x44EEBB );

        /** Left Hexagon **/
        geometry.faces.push( new THREE.Face3( 52, 18, 10 ) );
        geometry.faces.push( new THREE.Face3( 52, 10, 11 ) );
        geometry.faces.push( new THREE.Face3( 52, 11, 19 ) );
        geometry.faces.push( new THREE.Face3( 52, 19, 44 ) );
        geometry.faces.push( new THREE.Face3( 52, 44, 36 ) );
        geometry.faces.push( new THREE.Face3( 52, 36, 35 ) );
        geometry.faces.push( new THREE.Face3( 52, 35, 43 ) );
        geometry.faces.push( new THREE.Face3( 52, 43, 18 ) );
        geometry.faces[88].color = new THREE.Color( 0x44EEBB );
        geometry.faces[89].color = new THREE.Color( 0x44EEBB );
        geometry.faces[90].color = new THREE.Color( 0x44EEBB );
        geometry.faces[91].color = new THREE.Color( 0x44EEBB );
        geometry.faces[92].color = new THREE.Color( 0x44EEBB );
        geometry.faces[93].color = new THREE.Color( 0x44EEBB );
        geometry.faces[94].color = new THREE.Color( 0x44EEBB );
        geometry.faces[95].color = new THREE.Color( 0x44EEBB );

        /** Top side squares **/
        // Left
        geometry.faces.push( new THREE.Face3( 42, 43, 17 ) );
        geometry.faces.push( new THREE.Face3( 43, 18, 17  ) );
        geometry.faces[96].color = new THREE.Color( 0xFF1919 );
        geometry.faces[97].color = new THREE.Color( 0xFF1919 );
        // Right
        geometry.faces.push( new THREE.Face3( 24, 23, 49 ) );
        geometry.faces.push( new THREE.Face3( 23, 48, 49 ) );
        geometry.faces[98].color = new THREE.Color( 0xFF1919 );
        geometry.faces[99].color = new THREE.Color( 0xFF1919 );

        /** Bottom side squares **/
        // Left
        geometry.faces.push( new THREE.Face3( 19, 20, 44 ) );
        geometry.faces.push( new THREE.Face3( 45, 20, 44 ) );
        geometry.faces[100].color = new THREE.Color( 0xFF1919 );
        geometry.faces[101].color = new THREE.Color( 0xFF1919 );
        // right
        geometry.faces.push( new THREE.Face3( 21, 22, 47 ) );
        geometry.faces.push( new THREE.Face3( 21, 46, 47 ) );
        geometry.faces[102].color = new THREE.Color( 0xFF1919 );
        geometry.faces[103].color = new THREE.Color( 0xFF1919 );

        geometry.computeFaceNormals();

        var material = new THREE.MeshBasicMaterial( {vertexColors: THREE.FaceColors,  side: THREE.DoubleSide} );
        var octahedron = new THREE.Mesh( geometry, material );
        octahedron.scale.x = scale;
        octahedron.scale.y = scale;
        octahedron.scale.z = scale;

        scene.add( octahedron );
    }


    /**
     * Draws a picture of a truncate cuboctahedron.
     */
    var init = function() {
        var basics = setUp();
        var camera = basics.camera;
        var clock = basics.clock;
        var orbitControls = basics.orbitControls;
        orbitControls.autoRotate = true;
        var origin = basics.origin;
        var renderer = basics.renderer;
        var scene = basics.scene;

        makeResizable( camera, renderer );

        addLights( scene, origin );

        //geometry for the shape
        var geometry = createGeometry();
        //draw the shape
        drawTruncatedCuboctahedron( geometry, scene, 20 );
        //add spheres to the vertices
        vertexSpheres( geometry, scene, 20 );

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        /**
         * Renders the scene
         **/
        var render = function() {
            var delta = clock.getDelta();
            orbitControls.update(delta);


            // render using requestAnimationFrame
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }; // render()

        // add the output of the renderer to the html element
        document.getElementById("WebGL-output").appendChild(renderer.domElement);

        render();
    } // init()
